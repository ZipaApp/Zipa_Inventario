import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validación global de DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina propiedades no declaradas en DTO
      forbidNonWhitelisted: true, // lanza error si envían campos extra
      transform: true, // transforma payloads a objetos de clases DTO
    }),
  );

  app.enableCors({
    origin: '*', // Permitir solicitudes desde cualquier origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.listen(3000, '0.0.0.0');
  console.log(`Backend de Inventario corriendo en http://localhost:3000`);
}
bootstrap();

