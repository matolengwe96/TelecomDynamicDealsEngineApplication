import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  Headers,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiSecurity } from '@nestjs/swagger';
import { CyclesService } from './cycles.service';
import {
  CreateCycleDto,
  CycleDto,
  CycleStatusHistoryDto,
  CycleStatus,
  PaginationDto,
  PaginatedResult,
  ApiResponse,
  INTERNAL_HEADERS,
} from '@dde/contracts';
import { InternalSecretGuard } from '../../common/guards/internal-secret.guard';
import { UseGuards } from '@nestjs/common';

@ApiTags('cycles')
@ApiSecurity('internal-secret')
@UseGuards(InternalSecretGuard)
@Controller('cycles')
export class CyclesController {
  constructor(private readonly cyclesService: CyclesService) {}

  @Get()
  @ApiOperation({ summary: 'List all cycles' })
  async findAll(@Query() pagination: PaginationDto): Promise<ApiResponse<PaginatedResult<CycleDto>>> {
    const data = await this.cyclesService.findAll(pagination);
    return { success: true, data };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get cycle by ID' })
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<ApiResponse<CycleDto>> {
    const data = await this.cyclesService.findById(id);
    return { success: true, data };
  }

  @Get(':id/history')
  @ApiOperation({ summary: 'Get cycle status history' })
  async history(@Param('id', ParseUUIDPipe) id: string): Promise<ApiResponse<CycleStatusHistoryDto[]>> {
    const data = await this.cyclesService.getStatusHistory(id);
    return { success: true, data };
  }

  @Post()
  @ApiOperation({ summary: 'Create a new cycle' })
  async create(
    @Body() dto: CreateCycleDto,
    @Headers(INTERNAL_HEADERS.USER_ID) userId: string,
    @Headers('x-correlation-id') correlationId?: string,
  ): Promise<ApiResponse<CycleDto>> {
    const data = await this.cyclesService.create(dto, userId, correlationId);
    return { success: true, data };
  }

  @Patch(':id/status')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Advance cycle status (FSM transition)' })
  async advanceStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: { status: CycleStatus; reason?: string },
    @Headers(INTERNAL_HEADERS.USER_ID) userId: string,
    @Headers('x-correlation-id') correlationId?: string,
  ): Promise<ApiResponse<CycleDto>> {
    const data = await this.cyclesService.advanceStatus(id, body.status, userId, body.reason, correlationId);
    return { success: true, data };
  }

  @Post(':id/deal-config')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Submit deal configuration for this cycle' })
  async submitDealConfig(
    @Param('id', ParseUUIDPipe) id: string,
    @Body()
    body: {
      selectedTerms: number[];
      ctcCeiling: number;
      ctdCeiling: number;
      notes?: string;
    },
    @Headers(INTERNAL_HEADERS.USER_ID) userId: string,
    @Headers('x-correlation-id') correlationId?: string,
  ): Promise<void> {
    await this.cyclesService.submitDealConfig(id, body, userId, correlationId);
  }
}
