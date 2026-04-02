import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { ChannelDto } from '@dde/contracts';

@Injectable()
export class ChannelsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<ChannelDto[]> {
    const channels = await this.prisma.channel.findMany({
      where: { isActive: true },
      orderBy: { code: 'asc' },
    });
    return channels.map(this.toDto);
  }

  async findById(id: string): Promise<ChannelDto> {
    const c = await this.prisma.channel.findUnique({
      where: { id },
    });
    if (!c) throw new NotFoundException(`Channel ${id} not found`);
    return this.toDto(c);
  }

  private toDto(c: {
    id: string;
    code: number;
    name: string;
    isActive: boolean;
  }): ChannelDto {
    return {
      id: c.code,
      code: String(c.code),
      name: c.name,
      isActive: c.isActive,
    };
  }
}
