import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DDE_EVENTS_EXCHANGE, QUEUE_NAMES } from '@dde/config';
import { EventPublisherService } from './event-publisher.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DDE_EVENTS_BUS',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL ?? 'amqp://guest:guest@localhost:5672'],
          queue: QUEUE_NAMES.CYCLE,
          exchange: DDE_EVENTS_EXCHANGE,
          exchangeType: 'topic',
          noAck: false,
          queueOptions: { durable: true },
        },
      },
    ]),
  ],
  providers: [EventPublisherService],
  exports: [EventPublisherService],
})
export class EventPublisherModule {}
