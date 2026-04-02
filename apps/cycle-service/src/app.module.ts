import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerModule } from '@nestjs/throttler';
import { PrismaService } from './database/prisma.service';
import { CyclesModule } from './modules/cycles/cycles.module';
import { EventPublisherModule } from './messaging/event-publisher.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET ?? 'fallback-secret',
    }),
    ThrottlerModule.forRoot([{ name: 'global', ttl: 60000, limit: 300 }]),
    EventPublisherModule,
    CyclesModule,
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
