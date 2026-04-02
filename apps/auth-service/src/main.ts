import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { getRmqOptions, QUEUE_NAMES } from '@dde/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // HTTP API (called by api-gateway)
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // RabbitMQ microservice consumer
  const rmqUrl = process.env.RABBITMQ_URL;
  if (rmqUrl) {
    app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.RMQ,
      options: getRmqOptions(QUEUE_NAMES.AUTH),
    });
    await app.startAllMicroservices();
  }

  // Swagger (internal docs)
  const swaggerConfig = new DocumentBuilder()
    .setTitle('DDE Auth Service')
    .setDescription('Users, roles, permissions, sessions')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  console.log(`[auth-service] listening on http://localhost:${port}`);
}

bootstrap();
