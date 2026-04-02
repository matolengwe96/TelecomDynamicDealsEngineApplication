import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { ThrottlerModule } from '@nestjs/throttler';

import { AuthMiddleware } from './middleware/auth.middleware';
import { CorrelationIdMiddleware } from './middleware/correlation-id.middleware';

import { AuthProxyController } from './proxy/auth.proxy.controller';
import { CycleProxyController } from './proxy/cycle.proxy.controller';
import { CatalogProxyController } from './proxy/catalog.proxy.controller';
import { TradeListProxyController } from './proxy/tradelist.proxy.controller';
import { OemProxyController } from './proxy/oem.proxy.controller';
import { HeadlineProxyController } from './proxy/headline.proxy.controller';
import { ApprovalProxyController } from './proxy/approval.proxy.controller';
import { ChannelDealsProxyController } from './proxy/channel-deals.proxy.controller';
import { JobProxyController } from './proxy/job.proxy.controller';
import { NotificationProxyController } from './proxy/notification.proxy.controller';
import { AuditProxyController } from './proxy/audit.proxy.controller';
import { AdminProxyController } from './proxy/admin.proxy.controller';
import { HealthController } from './health.controller';

import { ProxyService } from './proxy/proxy.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule.register({ timeout: 30000, maxRedirects: 0 }),
    ThrottlerModule.forRoot([{ name: 'global', ttl: 60000, limit: 500 }]),
  ],
  controllers: [
    AuthProxyController,
    CycleProxyController,
    CatalogProxyController,
    TradeListProxyController,
    OemProxyController,
    HeadlineProxyController,
    ApprovalProxyController,
    ChannelDealsProxyController,
    JobProxyController,
    NotificationProxyController,
    AuditProxyController,
    AdminProxyController,
    HealthController,
  ],
  providers: [ProxyService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Correlation ID is applied to ALL routes
    consumer.apply(CorrelationIdMiddleware).forRoutes('*');

    // JWT auth is applied to all routes. Public route exceptions are handled in the middleware
    // so they remain correct even when global prefixes change.
    consumer
      .apply(AuthMiddleware)
      .forRoutes('*');
  }
}
