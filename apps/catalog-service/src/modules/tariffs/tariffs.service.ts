import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../../database/prisma.service';
import { TariffDto, TariffRangeDto, PaginationDto, PaginatedResult } from '@dde/contracts';

@Injectable()
export class TariffsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(pagination: PaginationDto): Promise<PaginatedResult<TariffDto>> {
    const page = pagination.page ?? 1;
    const limit = pagination.limit ?? 50;
    const skip = (page - 1) * limit;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.tariff.findMany({
        skip,
        take: limit,
        where: { isActive: true },
        include: { tariffRanges: true },
        orderBy: { name: 'asc' },
      }),
      this.prisma.tariff.count({ where: { isActive: true } }),
    ]);

    return {
      data: items.map(this.toDto),
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findById(id: string): Promise<TariffDto> {
    const t = await this.prisma.tariff.findUnique({
      where: { id },
      include: { tariffRanges: true },
    });
    if (!t) throw new NotFoundException(`Tariff ${id} not found`);
    return this.toDto(t);
  }

  async upsert(data: {
    code: string;
    name: string;
    type: string;
    subType?: string;
    monthlyFee: number;
    dataMb?: number;
    isUnlimitedData?: boolean;
    minutesPerMonth?: number;
    smsPerMonth?: number;
  }): Promise<TariffDto> {
    const tariff = await this.prisma.tariff.upsert({
      where: { code: data.code },
      create: { id: uuidv4(), ...data, isActive: true },
      update: { ...data },
      include: { tariffRanges: true },
    });
    return this.toDto(tariff);
  }

  async upsertRange(tariffId: string, range: { channelCode: number; termMonths: number; minPrice: number; maxPrice: number }): Promise<TariffRangeDto> {
    const tariff = await this.prisma.tariff.findUnique({ where: { id: tariffId } });
    if (!tariff) throw new NotFoundException(`Tariff ${tariffId} not found`);

    const r = await this.prisma.tariffRange.upsert({
      where: { tariffId_channelCode_termMonths: { tariffId, channelCode: range.channelCode, termMonths: range.termMonths } },
      create: { id: uuidv4(), tariffId, ...range },
      update: { minPrice: range.minPrice, maxPrice: range.maxPrice },
    });

    return {
      id: r.id,
      tariffType: (tariff.type === 'DATA' ? 'D' : 'V') as any,
      termMonths: r.termMonths,
      minCostEx: Number(r.minPrice),
      maxCostEx: Number(r.maxPrice),
      tariffCode: tariff.code,
    };
  }

  private toDto(t: {
    id: string;
    code: string;
    name: string;
    type: string;
    subType: string | null;
    monthlyFee: any;
    dataMb: number | null;
    isUnlimitedData: boolean;
    minutesPerMonth: number | null;
    smsPerMonth: number | null;
    isActive: boolean;
    createdAt: Date;
    tariffRanges: Array<{ id: string; tariffId: string; channelCode: number; termMonths: number; minPrice: any; maxPrice: any }>;
  }): TariffDto {
    return {
      id: t.id,
      tariffCode: t.code,
      tariffName: t.name,
      tariffType: (t.type === 'DATA' ? 'D' : 'V') as any,
      tariffSubType: (t.subType === 'FWA' ? 'FWA' : t.subType === 'MBB' ? 'MBB' : null) as any,
      subscription: Number(t.monthlyFee),
      discount: 0,
      ccsId: 0,
      ranking: null,
      isActive: t.isActive,
      createdAt: t.createdAt,
    };
  }
}
