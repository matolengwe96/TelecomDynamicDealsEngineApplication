import { Module } from '@nestjs/common';
import { TariffsController } from './tariffs.controller';
import { TariffsService } from './tariffs.service';
import { PrismaService } from '../../database/prisma.service';

@Module({
  controllers: [TariffsController],
  providers: [TariffsService, PrismaService],
  exports: [TariffsService],
})
export class TariffsModule {}
