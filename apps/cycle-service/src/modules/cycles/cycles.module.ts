import { Module } from '@nestjs/common';
import { CyclesController } from './cycles.controller';
import { CyclesService } from './cycles.service';
import { PrismaService } from '../../database/prisma.service';
import { EventPublisherModule } from '../../messaging/event-publisher.module';

@Module({
  imports: [EventPublisherModule],
  controllers: [CyclesController],
  providers: [CyclesService, PrismaService],
})
export class CyclesModule {}
