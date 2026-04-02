import { Controller, Get, Post, Param, Body, Query, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';
import { VasService } from './vas.service';
import { VasDto, PaginationDto, PaginatedResult, ApiResponse } from '@dde/contracts';
import { InternalSecretGuard } from '../../common/guards/internal-secret.guard';

@ApiTags('catalog/vas')
@ApiSecurity('internal-secret')
@UseGuards(InternalSecretGuard)
@Controller('catalog/vas')
export class VasController {
  constructor(private readonly vasService: VasService) {}

  @Get()
  async findAll(@Query() pagination: PaginationDto): Promise<ApiResponse<PaginatedResult<VasDto>>> {
    return { success: true, data: await this.vasService.findAll(pagination) };
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<ApiResponse<VasDto>> {
    return { success: true, data: await this.vasService.findById(id) };
  }

  @Post()
  async upsert(@Body() body: { code: string; name: string; description?: string; monthlyCost: number }): Promise<ApiResponse<VasDto>> {
    return { success: true, data: await this.vasService.upsert(body) };
  }
}
