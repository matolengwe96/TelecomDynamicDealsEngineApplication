import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const logger = new Logger('CatalogService');
  const port = parseInt(process.env.PORT ?? '3003', 10);

  const app = await NestFactory.create(AppModule);
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }));

  const config = new DocumentBuilder()
    .setTitle('Catalog Service')
    .setDescription('Manages devices, tariffs, channels, terms, and VAS reference data')
    .setVersion('1.0')
    .addApiKey({ type: 'apiKey', in: 'header', name: 'x-internal-secret' }, 'internal-secret')
    .build();
  SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, config));

  await app.listen(port);
  logger.log(`Catalog service listening on :${port}`);
}

bootstrap();
