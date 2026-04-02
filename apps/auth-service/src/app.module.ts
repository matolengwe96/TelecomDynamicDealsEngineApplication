import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerModule } from '@nestjs/throttler';

import { PrismaService } from './database/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { EventPublisherModule } from './messaging/event-publisher.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET ?? 'fallback-secret',
      signOptions: { expiresIn: process.env.JWT_ACCESS_EXPIRES_IN ?? '15m' },
    }),
    ThrottlerModule.forRoot([{ name: 'global', ttl: 60000, limit: 300 }]),

    EventPublisherModule,
    AuthModule,
    UsersModule,
    RolesModule,
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
