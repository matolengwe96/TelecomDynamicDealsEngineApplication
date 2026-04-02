import {
  Injectable,
  UnauthorizedException,
  ForbiddenException,
  ConflictException,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../../database/prisma.service';
import { LoginDto, LoginResponseDto, UserSummaryDto } from '@dde/contracts';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly BCRYPT_ROUNDS = 12;
  private readonly REFRESH_EXPIRES_DAYS = 7;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async login(dto: LoginDto, ip: string, userAgent: string): Promise<LoginResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase().trim() },
      include: {
        userRoles: { include: { role: true } },
      },
    });

    const success = user != null && (await bcrypt.compare(dto.password, user.passwordHash));

    // Always record login attempt for audit (before throwing to avoid timing attacks)
    await this.prisma.userLoginHistory.create({
      data: {
        id: uuidv4(),
        userId: user?.id ?? null,
        email: dto.email.toLowerCase().trim(),
        success,
        ipAddress: ip,
        userAgent,
      },
    });

    if (!success || !user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isActive) {
      throw new ForbiddenException('Account disabled');
    }

    const roles = user.userRoles.map((ur) => ur.role.name);
    const accessToken = this.signAccess(user.id, user.email, roles);
    const { refreshToken, hashedRefresh } = await this.generateRefresh();

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + this.REFRESH_EXPIRES_DAYS);

    await this.prisma.session.create({
      data: {
        id: uuidv4(),
        userId: user.id,
        refreshToken: hashedRefresh,
        ipAddress: ip,
        userAgent,
        expiresAt,
      },
    });

    return {
      accessToken,
      refreshToken,
      expiresIn: 900, // 15 minutes in seconds
      user: this.toSummary(user, roles),
    };
  }

  async refresh(rawRefreshToken: string, ip: string, userAgent: string): Promise<LoginResponseDto> {
    // We hash incoming token and look it up
    const sessions = await this.prisma.session.findMany({
      where: { revokedAt: null, expiresAt: { gt: new Date() } },
      include: { user: { include: { userRoles: { include: { role: true } } } } },
    });

    let matched: (typeof sessions)[number] | undefined;
    for (const s of sessions) {
      if (await bcrypt.compare(rawRefreshToken, s.refreshToken)) {
        matched = s;
        break;
      }
    }

    if (!matched) throw new UnauthorizedException('Invalid or expired refresh token');
    if (!matched.user.isActive) throw new ForbiddenException('Account disabled');

    // Rotate: revoke old, issue new
    await this.prisma.session.update({
      where: { id: matched.id },
      data: { revokedAt: new Date() },
    });

    const roles = matched.user.userRoles.map((ur) => ur.role.name);
    const accessToken = this.signAccess(matched.user.id, matched.user.email, roles);
    const { refreshToken, hashedRefresh } = await this.generateRefresh();

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + this.REFRESH_EXPIRES_DAYS);

    await this.prisma.session.create({
      data: {
        id: uuidv4(),
        userId: matched.user.id,
        refreshToken: hashedRefresh,
        ipAddress: ip,
        userAgent,
        expiresAt,
      },
    });

    return {
      accessToken,
      refreshToken,
      expiresIn: 900,
      user: this.toSummary(matched.user, roles),
    };
  }

  async logout(userId: string, rawRefreshToken?: string): Promise<void> {
    if (rawRefreshToken) {
      const sessions = await this.prisma.session.findMany({
        where: { userId, revokedAt: null },
      });
      for (const s of sessions) {
        if (await bcrypt.compare(rawRefreshToken, s.refreshToken)) {
          await this.prisma.session.update({
            where: { id: s.id },
            data: { revokedAt: new Date() },
          });
          return;
        }
      }
    } else {
      // Revoke all sessions for this user
      await this.prisma.session.updateMany({
        where: { userId, revokedAt: null },
        data: { revokedAt: new Date() },
      });
    }
  }

  async getMe(userId: string): Promise<UserSummaryDto> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { userRoles: { include: { role: true } } },
    });
    if (!user) throw new NotFoundException('User not found');
    const roles = user.userRoles.map((ur) => ur.role.name);
    return this.toSummary(user, roles);
  }

  // ── Private helpers ──────────────────────────────────────────────────────────

  private signAccess(sub: string, email: string, roles: string[]): string {
    return this.jwt.sign({ sub, email, roles, jti: uuidv4() });
  }

  private async generateRefresh(): Promise<{ refreshToken: string; hashedRefresh: string }> {
    const refreshToken = uuidv4() + '-' + uuidv4(); // 72-char random token
    const hashedRefresh = await bcrypt.hash(refreshToken, this.BCRYPT_ROUNDS);
    return { refreshToken, hashedRefresh };
  }

  private toSummary(
    user: { id: string; email: string; firstName: string | null; lastName: string | null },
    roles: string[],
  ): UserSummaryDto {
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      roles,
    };
  }
}
