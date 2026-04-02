import { Module } from '@nestjs/common';
import { VasController } from './vas.controller';
import { VasService } from './vas.service';
import { PrismaService } from '../../database/prisma.service';

@Module({
  controllers: [VasController],
  providers: [VasService, PrismaService],
  exports: [VasService],
})
export class VasModule {}
