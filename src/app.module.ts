import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

// Importar tus módulos de dominio
import { ClasificacionModule } from './clasificacion/clasificacion.module';
import { ProductoModule } from './producto/producto.module';
import { AlmacenModule } from './almacen/almacen.module';
import { StockModule } from './stock/stock.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { SedeModule } from './sede/sede.module';
import { ComerciaModule } from './comercia/comercia.module';
import { MovimientoModule } from './movimiento/movimiento.module';

@Module({
  imports: [
    // Variables de entorno globales
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
    // Conexión a notificaciones
    ClientsModule.register([
      {
        name: 'NOTIFICACIONES_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://rabbitmq:5672'], // usa el hostname del contenedor RabbitMQ
          queue: 'notificaciones_queue',
          queueOptions: { durable: true },
        },
      },
    ]),
    
    // Conexión a PostgreSQL usando variables de entorno
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

    // Configuración para subida de imágenes
    MulterModule.register({
      dest: join(__dirname, '..', 'uploads'),
    }),

    // Módulos del dominio
    DatabaseModule,
    ClasificacionModule,
    ProductoModule,
    AlmacenModule,
    StockModule,
    ProveedorModule,
    SedeModule,
    ComerciaModule,
    MovimientoModule, 
  ],
})
export class AppModule {}

