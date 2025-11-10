import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Servir archivos estáticos (imágenes subidas)
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/', // Acceso vía http://localhost:3000/uploads/*
  });

  // Validación global de DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina propiedades no declaradas en DTO
      forbidNonWhitelisted: true, // lanza error si envían campos extra
      transform: true, // convierte payloads a instancias de clases DTO
    }),
  );

  // CORS
  app.enableCors({
    origin: '*', // o restringir según entorno
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
  });

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`✅ Backend de Inventario corriendo en http://localhost:${port}`);
  console.log(`🖼️  Imágenes disponibles en http://localhost:${port}/uploads/...`);
}
bootstrap();

