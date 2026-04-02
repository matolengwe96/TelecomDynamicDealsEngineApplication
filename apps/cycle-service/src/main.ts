import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe, VersioningType, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { getRmqOptions, QUEUE_NAMES } from '@dde/config';

async function bootstrap(): Promise<void> {
  const logger = new Logger('CycleService');
  const port = parseInt(process.env.PORT ?? '3002', 10);

  const app = await NestFactory.create(AppModule);

  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }));

  const config = new DocumentBuilder()
    .setTitle('Cycle Service')
    .setDescription('Manages commercial cycles, deal configuration, and campaign metadata')
    .setVersion('1.0')
    .addApiKey({ type: 'apiKey', in: 'header', name: 'x-internal-secret' }, 'internal-secret')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  if (process.env.RABBITMQ_URL) {
    app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.RMQ,
      options: getRmqOptions(QUEUE_NAMES.CYCLE),
    });
    await app.startAllMicroservices();
    logger.log('RabbitMQ consumer started');
  }

  await app.listen(port);
  logger.log(`Cycle service listening on :${port}`);
}

bootstrap();
