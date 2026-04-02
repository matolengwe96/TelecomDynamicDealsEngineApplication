import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { PrismaService } from './database/prisma.service';
import { DevicesModule } from './modules/devices/devices.module';
import { TariffsModule } from './modules/tariffs/tariffs.module';
import { ChannelsModule } from './modules/channels/channels.module';
import { VasModule } from './modules/vas/vas.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{ name: 'global', ttl: 60000, limit: 300 }]),
    DevicesModule,
    TariffsModule,
    ChannelsModule,
    VasModule,
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
