import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { Clasificacion } from '../clasificacion/entities/clasificacion.entity';
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto, Clasificacion]),

    // Configurar Multer globalmente para este módulo
    MulterModule.register({
      dest: join(__dirname, '..', '..', 'uploads', 'productos'),
    }),
  ],
  controllers: [ProductoController],
  providers: [ProductoService],
  exports: [ProductoService],
})
export class ProductoModule {
  constructor() {
    // Crea el directorio de subida si no existe
    const uploadPath = join(__dirname, '..', '..', 'uploads', 'productos');
    if (!existsSync(uploadPath)) {
      mkdirSync(uploadPath, { recursive: true });
      console.log('📁 Carpeta de productos creada en:', uploadPath);
    }
  }
}

