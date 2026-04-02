import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { CreateRoleDto, RoleDto, ApiResponse } from '@dde/contracts';

@ApiTags('admin/roles')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('admin/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  @ApiOperation({ summary: 'List all roles' })
  async findAll(): Promise<ApiResponse<RoleDto[]>> {
    const data = await this.rolesService.findAll();
    return { success: true, data };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get role by ID' })
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<ApiResponse<RoleDto>> {
    const data = await this.rolesService.findById(id);
    return { success: true, data };
  }

  @Post()
  @ApiOperation({ summary: 'Create a new role' })
  async create(@Body() dto: CreateRoleDto): Promise<ApiResponse<RoleDto>> {
    const data = await this.rolesService.create(dto);
    return { success: true, data };
  }

  @Post(':id/permissions/:permissionId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Assign a permission to a role' })
  async assignPermission(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('permissionId', ParseUUIDPipe) permissionId: string,
  ): Promise<void> {
    await this.rolesService.assignPermission(id, permissionId);
  }
}
