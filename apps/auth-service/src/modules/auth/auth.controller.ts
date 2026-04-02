import {
  Controller,
  Post,
  Get,
  Body,
  Req,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto, LoginResponseDto, UserSummaryDto, ApiResponse } from '@dde/contracts';
import { JwtPayload } from './strategies/jwt.strategy';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login with email and password' })
  async login(@Body() dto: LoginDto, @Req() req: Request): Promise<ApiResponse<LoginResponseDto>> {
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ?? req.ip ?? 'unknown';
    const userAgent = req.headers['user-agent'] ?? 'unknown';
    const data = await this.authService.login(dto, ip, userAgent);
    return { success: true, data };
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Refresh access token using refresh token' })
  async refresh(
    @Body() body: { refreshToken: string },
    @Req() req: Request,
  ): Promise<ApiResponse<LoginResponseDto>> {
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ?? req.ip ?? 'unknown';
    const userAgent = req.headers['user-agent'] ?? 'unknown';
    const data = await this.authService.refresh(body.refreshToken, ip, userAgent);
    return { success: true, data };
  }

  @Post('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Revoke current session' })
  async logout(@Req() req: Request & { user: JwtPayload }, @Body() body: { refreshToken?: string }): Promise<void> {
    await this.authService.logout(req.user.sub, body.refreshToken);
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current authenticated user' })
  async me(@Req() req: Request & { user: JwtPayload }): Promise<ApiResponse<UserSummaryDto>> {
    const data = await this.authService.getMe(req.user.sub);
    return { success: true, data };
  }
}
