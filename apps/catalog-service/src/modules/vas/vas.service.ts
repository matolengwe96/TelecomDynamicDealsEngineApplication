import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../../database/prisma.service';
import { VasDto, PaginationDto, PaginatedResult } from '@dde/contracts';

@Injectable()
export class VasService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(pagination: PaginationDto): Promise<PaginatedResult<VasDto>> {
    const page = pagination.page ?? 1;
    const limit = pagination.limit ?? 50;
    const skip = (page - 1) * limit;
    const [items, total] = await this.prisma.$transaction([
      this.prisma.vas.findMany({ skip, take: limit, where: { isActive: true }, orderBy: { name: 'asc' } }),
      this.prisma.vas.count({ where: { isActive: true } }),
    ]);
    return {
      data: items.map(this.toDto),
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findById(id: string): Promise<VasDto> {
    const v = await this.prisma.vas.findUnique({ where: { id } });
    if (!v) throw new NotFoundException(`VAS ${id} not found`);
    return this.toDto(v);
  }

  async upsert(data: { code: string; name: string; description?: string; monthlyCost: number }): Promise<VasDto> {
    const v = await this.prisma.vas.upsert({
      where: { code: data.code },
      create: { id: uuidv4(), ...data, isActive: true },
      update: { ...data },
    });
    return this.toDto(v);
  }

  private toDto(v: {
    id: string; code: string; name: string; description: string | null; monthlyCost: any; isActive: boolean; createdAt: Date;
  }): VasDto {
    return {
      id: v.id,
      vasCode: v.code,
      vasName: v.name,
      description: v.description ?? null,
      monthlyFee: Number(v.monthlyCost),
      isActive: v.isActive,
      createdAt: v.createdAt,
    };
  }
}
