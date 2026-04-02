import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../../database/prisma.service';
import { DeviceDto, PaginationDto, PaginatedResult } from '@dde/contracts';

@Injectable()
export class DevicesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(pagination: PaginationDto): Promise<PaginatedResult<DeviceDto>> {
    const page = pagination.page ?? 1;
    const limit = pagination.limit ?? 50;
    const skip = (page - 1) * limit;
    const [items, total] = await this.prisma.$transaction([
      this.prisma.device.findMany({ skip, take: limit, where: { isActive: true }, orderBy: { model: 'asc' } }),
      this.prisma.device.count({ where: { isActive: true } }),
    ]);
    return {
      data: items.map(this.toDto),
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findById(id: string): Promise<DeviceDto> {
    const d = await this.prisma.device.findUnique({ where: { id } });
    if (!d) throw new NotFoundException(`Device ${id} not found`);
    return this.toDto(d);
  }

  async upsert(data: {
    oemCode: string;
    model: string;
    colour?: string;
    storageGb?: number;
    category?: string;
    handsetCost: number;
    retailPrice: number;
  }): Promise<DeviceDto> {
    const device = await this.prisma.device.upsert({
      where: { oemCode: data.oemCode },
      create: { id: uuidv4(), ...data, isActive: true },
      update: { ...data },
    });
    return this.toDto(device);
  }

  private toDto(d: {
    id: string;
    oemCode: string;
    model: string;
    colour: string | null;
    storageGb: number | null;
    category: string | null;
    handsetCost: any;
    retailPrice: any;
    isActive: boolean;
    createdAt: Date;
  }): DeviceDto {
    const cid = Number.parseInt((d.oemCode.match(/\d+/)?.[0] ?? '0'), 10);
    return {
      id: d.id,
      cid,
      mainCid: cid,
      oem: d.oemCode,
      description: d.model,
      modelName: d.model,
      colour: d.colour ?? null,
      category: d.category ?? null,
      objectType: d.storageGb != null ? `${d.storageGb}GB` : null,
      tradeEx: Number(d.handsetCost),
      retailRrpInclVat: Number(d.retailPrice),
      os: null,
      netTech: null,
      isActive: d.isActive,
      createdAt: d.createdAt,
    };
  }
}
