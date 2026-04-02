import { Controller, Get, Param, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';
import { ChannelsService } from './channels.service';
import { ChannelDto, ApiResponse } from '@dde/contracts';
import { InternalSecretGuard } from '../../common/guards/internal-secret.guard';

@ApiTags('catalog/channels')
@ApiSecurity('internal-secret')
@UseGuards(InternalSecretGuard)
@Controller('catalog/channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Get()
  async findAll(): Promise<ApiResponse<ChannelDto[]>> {
    return { success: true, data: await this.channelsService.findAll() };
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<ApiResponse<ChannelDto>> {
    return { success: true, data: await this.channelsService.findById(id) };
  }
}
