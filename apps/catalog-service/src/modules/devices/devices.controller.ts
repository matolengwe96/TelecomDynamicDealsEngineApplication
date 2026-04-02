import { Controller, Get, Post, Param, Body, Query, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiSecurity } from '@nestjs/swagger';
import { DevicesService } from './devices.service';
import { DeviceDto, PaginationDto, PaginatedResult, ApiResponse } from '@dde/contracts';
import { InternalSecretGuard } from '../../common/guards/internal-secret.guard';

@ApiTags('catalog/devices')
@ApiSecurity('internal-secret')
@UseGuards(InternalSecretGuard)
@Controller('catalog/devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get()
  @ApiOperation({ summary: 'List active devices' })
  async findAll(@Query() pagination: PaginationDto): Promise<ApiResponse<PaginatedResult<DeviceDto>>> {
    const data = await this.devicesService.findAll(pagination);
    return { success: true, data };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get device by ID' })
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<ApiResponse<DeviceDto>> {
    const data = await this.devicesService.findById(id);
    return { success: true, data };
  }

  @Post()
  @ApiOperation({ summary: 'Create or update a device (upsert by oemCode)' })
  async upsert(@Body() body: {
    oemCode: string;
    model: string;
    colour?: string;
    storageGb?: number;
    category?: string;
    handsetCost: number;
    retailPrice: number;
  }): Promise<ApiResponse<DeviceDto>> {
    const data = await this.devicesService.upsert(body);
    return { success: true, data };
  }
}
