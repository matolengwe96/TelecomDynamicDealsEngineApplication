import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BaseDdeEvent } from '@dde/events';

@Injectable()
export class EventPublisherService {
  private readonly logger = new Logger(EventPublisherService.name);

  constructor(@Inject('DDE_EVENTS_BUS') private readonly client: ClientProxy) {}

  async publish(routingKey: string, event: BaseDdeEvent): Promise<void> {
    try {
      await this.client.emit(routingKey, event).toPromise();
      this.logger.log(`Published ${routingKey} [${event.eventId}]`);
    } catch (err) {
      this.logger.error(`Failed to publish ${routingKey}: ${(err as Error).message}`);
    }
  }
}
