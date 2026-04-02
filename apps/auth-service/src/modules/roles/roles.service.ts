import { Injectable, NotFoundException, ConflictException, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../../database/prisma.service';
import { CreateRoleDto, RoleDto } from '@dde/contracts';

@Injectable()
export class RolesService {
  private readonly logger = new Logger(RolesService.name);

  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<RoleDto[]> {
    const roles = await this.prisma.role.findMany({
      include: { rolePermissions: { include: { permission: true } } },
      orderBy: { name: 'asc' },
    });
    return roles.map(this.toDto);
  }

  async findById(id: string): Promise<RoleDto> {
    const role = await this.prisma.role.findUnique({
      where: { id },
      include: { rolePermissions: { include: { permission: true } } },
    });
    if (!role) throw new NotFoundException(`Role ${id} not found`);
    return this.toDto(role);
  }

  async create(dto: CreateRoleDto): Promise<RoleDto> {
    const existing = await this.prisma.role.findUnique({ where: { name: dto.name } });
    if (existing) throw new ConflictException(`Role '${dto.name}' already exists`);

    const role = await this.prisma.role.create({
      data: { id: uuidv4(), name: dto.name, description: dto.description },
      include: { rolePermissions: { include: { permission: true } } },
    });

    this.logger.log(`Created role ${role.name}`);
    return this.toDto(role);
  }

  async assignPermission(roleId: string, permissionId: string): Promise<void> {
    const [role, permission] = await this.prisma.$transaction([
      this.prisma.role.findUnique({ where: { id: roleId } }),
      this.prisma.permission.findUnique({ where: { id: permissionId } }),
    ]);
    if (!role) throw new NotFoundException(`Role ${roleId} not found`);
    if (!permission) throw new NotFoundException(`Permission ${permissionId} not found`);

    await this.prisma.rolePermission.upsert({
      where: { roleId_permissionId: { roleId, permissionId } },
      create: { roleId, permissionId },
      update: {},
    });
  }

  private toDto(
    role: {
      id: string;
      name: string;
      description: string | null;
      rolePermissions: Array<{
        permission: { id: string; resource: string; action: string };
      }>;
    },
  ): RoleDto {
    return {
      id: role.id,
      name: role.name,
      description: role.description ?? null,
      permissions: role.rolePermissions.map((rp) => `${rp.permission.resource}:${rp.permission.action}`),
    };
  }
}
