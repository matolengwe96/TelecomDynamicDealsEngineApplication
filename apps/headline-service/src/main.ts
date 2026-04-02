import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe, VersioningType, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { getRmqOptions, QUEUE_NAMES } from '@dde/config';

async function bootstrap(): Promise<void> {
  const logger = new Logger('HeadlineService');
  const port = parseInt(process.env.PORT ?? '3006', 10);
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app,
    new DocumentBuilder().setTitle('Headline Service').setVersion('1.0').build()));
  if (process.env.RABBITMQ_URL) {
    app.connectMicroservice<MicroserviceOptions>({ transport: Transport.RMQ, options: getRmqOptions(QUEUE_NAMES.HEADLINE) });
    await app.startAllMicroservices();
  }
  await app.listen(port);
  logger.log(`Headline service listening on :${port}`);
}

bootstrap();
