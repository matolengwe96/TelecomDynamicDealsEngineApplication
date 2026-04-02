import { Module, Controller, Get, Query } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Controller('health')
class HealthController {
  @Get() health() { return { status: 'ok', service: 'notification-service' }; }
}

@Controller('notifications')
class NotificationsController {
  @Get()
  list(@Query('page') page = '1', @Query('limit') limit = '10') {
    return { success: true, data: [], total: 0, page: Number(page), limit: Number(limit) };
  }
}

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [HealthController, NotificationsController],
})
export class AppModule {}
