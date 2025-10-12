import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';

// Importar tus módulos de dominio
import { ClasificacionModule } from './clasificacion/clasificacion.module';
import { ProductoModule } from './producto/producto.module';
import { AlmacenModule } from './almacen/almacen.module';
import { StockModule } from './stock/stock.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { SedeModule } from './sede/sede.module';
import { ComerciaModule } from './comercia/comercia.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // variables disponibles en toda la app
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST') || 'db',
        port: 5432,
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DB'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
    }),
    // Multer para subir imágenes a almacenamiento local
    MulterModule.register({
      dest: join(__dirname, '..', 'uploads'),
    }),
    
    DatabaseModule,
    ClasificacionModule,
    ProductoModule,
    AlmacenModule,
    StockModule,
    ProveedorModule,
    SedeModule,
    ComerciaModule,
  ],
})
export class AppModule {}

