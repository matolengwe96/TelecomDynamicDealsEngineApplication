import { Controller, Get, Post, Param, Body, Query, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiSecurity } from '@nestjs/swagger';
import { TariffsService } from './tariffs.service';
import { TariffDto, TariffRangeDto, PaginationDto, PaginatedResult, ApiResponse } from '@dde/contracts';
import { InternalSecretGuard } from '../../common/guards/internal-secret.guard';

@ApiTags('catalog/tariffs')
@ApiSecurity('internal-secret')
@UseGuards(InternalSecretGuard)
@Controller('catalog/tariffs')
export class TariffsController {
  constructor(private readonly tariffsService: TariffsService) {}

  @Get()
  async findAll(@Query() pagination: PaginationDto): Promise<ApiResponse<PaginatedResult<TariffDto>>> {
    return { success: true, data: await this.tariffsService.findAll(pagination) };
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<ApiResponse<TariffDto>> {
    return { success: true, data: await this.tariffsService.findById(id) };
  }

  @Post()
  async upsert(@Body() body: any): Promise<ApiResponse<TariffDto>> {
    return { success: true, data: await this.tariffsService.upsert(body) };
  }

  @Post(':id/ranges')
  async upsertRange(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: { channelCode: number; termMonths: number; minPrice: number; maxPrice: number },
  ): Promise<ApiResponse<TariffRangeDto>> {
    return { success: true, data: await this.tariffsService.upsertRange(id, body) };
  }
}
