import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../../database/prisma.service';
import { EventPublisherService } from '../../messaging/event-publisher.service';
import {
  CreateCycleDto,
  CycleDto,
  CycleStatusHistoryDto,
  CycleStatus,
  CYCLE_STATUS_TRANSITIONS,
  PaginationDto,
  PaginatedResult,
} from '@dde/contracts';
import {
  CycleCreatedEvent,
  CycleStatusChangedEvent,
  DealConfigSubmittedEvent,
  DdeEventName,
} from '@dde/events';

@Injectable()
export class CyclesService {
  private readonly logger = new Logger(CyclesService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly events: EventPublisherService,
  ) {}

  async findAll(pagination: PaginationDto): Promise<PaginatedResult<CycleDto>> {
    const page = pagination.page ?? 1;
    const limit = pagination.limit ?? 20;
    const skip = (page - 1) * limit;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.cycle.findMany({
        skip,
        take: limit,
        include: { businessUnit: true, campaigns: true },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.cycle.count(),
    ]);

    return {
      data: items.map(this.toDto),
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findById(id: string): Promise<CycleDto> {
    const cycle = await this.getCycleOrThrow(id);
    return this.toDto(cycle);
  }

  async getStatusHistory(cycleId: string): Promise<CycleStatusHistoryDto[]> {
    await this.getCycleOrThrow(cycleId);
    const history = await this.prisma.cycleStatusHistory.findMany({
      where: { cycleId },
      orderBy: { createdAt: 'asc' },
    });
    return history.map((h: any) => ({
      id: h.id,
      cycleId: h.cycleId,
      fromStatus: (h.fromStatus || null) as CycleStatus | null,
      toStatus: h.toStatus as CycleStatus,
      changedByUserId: h.changedBy,
      reason: h.reason ?? null,
      createdAt: h.createdAt,
    }));
  }

  async create(dto: CreateCycleDto, userId: string, correlationId?: string): Promise<CycleDto> {
    // Validate business unit exists
    const bu = await this.prisma.cfgBusinessUnit.findUnique({
      where: { code: dto.businessUnit },
    });
    if (!bu) throw new BadRequestException(`Unknown business unit: ${dto.businessUnit}`);

    if (new Date(dto.startDate) >= new Date(dto.endDate)) {
      throw new BadRequestException('startDate must be before endDate');
    }

    const cycle = await this.prisma.cycle.create({
      data: {
        id: uuidv4(),
        name: dto.name,
        businessUnitId: bu.id,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate),
        status: CycleStatus.DRAFT,
        description: dto.description,
        createdBy: userId,
      },
      include: { businessUnit: true, campaigns: true },
    });

    await this.prisma.cycleStatusHistory.create({
      data: {
        id: uuidv4(),
        cycleId: cycle.id,
        fromStatus: '',
        toStatus: CycleStatus.DRAFT,
        changedBy: userId,
        reason: 'Cycle created',
        correlationId,
      },
    });

    const event = new CycleCreatedEvent(correlationId ?? cycle.id, 'cycle-service');
    event.cycleId = cycle.id;
    event.cycleName = cycle.name;
    event.businessUnit = bu.code;
    event.createdByUserId = userId;
    await this.events.publish(DdeEventName.CYCLE_CREATED, event);

    this.logger.log(`Created cycle ${cycle.id} (${cycle.name})`);
    return this.toDto(cycle);
  }

  async advanceStatus(
    id: string,
    toStatus: CycleStatus,
    userId: string,
    reason?: string,
    correlationId?: string,
  ): Promise<CycleDto> {
    const cycle = await this.getCycleOrThrow(id);
    const current = cycle.status as CycleStatus;
    const allowed = CYCLE_STATUS_TRANSITIONS[current] ?? [];

    if (!allowed.includes(toStatus)) {
      throw new BadRequestException(
        `Cannot transition cycle from '${current}' to '${toStatus}'. Allowed: [${allowed.join(', ')}]`,
      );
    }

    const updated = await this.prisma.cycle.update({
      where: { id },
      data: { status: toStatus, version: { increment: 1 }, updatedBy: userId },
      include: { businessUnit: true, campaigns: true },
    });

    await this.prisma.cycleStatusHistory.create({
      data: {
        id: uuidv4(),
        cycleId: id,
        fromStatus: current,
        toStatus,
        changedBy: userId,
        reason,
        correlationId,
      },
    });

    const event = new CycleStatusChangedEvent(correlationId ?? id, 'cycle-service');
    event.cycleId = id;
    event.fromStatus = current;
    event.toStatus = toStatus;
    event.changedByUserId = userId;
    event.reason = reason ?? null;
    await this.events.publish(DdeEventName.CYCLE_STATUS_CHANGED, event);

    this.logger.log(`Cycle ${id} transitioned ${current} → ${toStatus}`);
    return this.toDto(updated);
  }

  async submitDealConfig(
    cycleId: string,
    payload: {
      selectedTerms: number[];
      ctcCeiling: number;
      ctdCeiling: number;
      notes?: string;
    },
    userId: string,
    correlationId?: string,
  ): Promise<void> {
    const cycle = await this.getCycleOrThrow(cycleId);

    if (cycle.status !== CycleStatus.OEM_NEGOTIATION) {
      throw new BadRequestException(`Deal config can only be submitted when cycle is in OEM_NEGOTIATION status`);
    }

    // Upsert deal config
    await this.prisma.cycleDealConfig.upsert({
      where: { cycleId },
      create: {
        id: uuidv4(),
        cycleId,
        selectedTerms: payload.selectedTerms.map(String),
        ctcCeiling: payload.ctcCeiling,
        ctdCeiling: payload.ctdCeiling,
        notes: payload.notes,
        submittedBy: userId,
      },
      update: {
        selectedTerms: payload.selectedTerms.map(String),
        ctcCeiling: payload.ctcCeiling,
        ctdCeiling: payload.ctdCeiling,
        notes: payload.notes,
        submittedBy: userId,
        submittedAt: new Date(),
      },
    });

    await this.advanceStatus(cycleId, CycleStatus.CONFIG_APPROVAL, userId, 'Deal config submitted', correlationId);

    const event = new DealConfigSubmittedEvent(correlationId ?? cycleId, 'cycle-service');
    event.cycleId = cycleId;
    event.submittedByUserId = userId;
    await this.events.publish(DdeEventName.DEAL_CONFIG_SUBMITTED, event);

    this.logger.log(`Deal config submitted for cycle ${cycleId}`);
  }

  // ── Private helpers ──────────────────────────────────────────────────────────

  private async getCycleOrThrow(id: string) {
    const cycle = await this.prisma.cycle.findUnique({
      where: { id },
      include: { businessUnit: true, campaigns: true },
    });
    if (!cycle) throw new NotFoundException(`Cycle ${id} not found`);
    return cycle;
  }

  private toDto(cycle: {
    id: string;
    name: string;
    status: string;
    description: string | null;
    startDate: Date;
    endDate: Date;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
    businessUnit: { code: string };
    campaigns: Array<{ id: string; name: string }>;
  }): CycleDto {
    return {
      id: cycle.id,
      name: cycle.name,
      businessUnit: cycle.businessUnit.code as any,
      status: cycle.status as CycleStatus,
      description: cycle.description ?? null,
      startDate: cycle.startDate,
      endDate: cycle.endDate,
      createdByUserId: cycle.createdBy,
      createdAt: cycle.createdAt,
      updatedAt: cycle.updatedAt,
    };
  }
}
