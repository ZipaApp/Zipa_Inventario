import { Module } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { AlmacenController } from './almacen.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule], // Importamos DatabaseModule que provee DATA_SOURCE
  controllers: [AlmacenController],
  providers: [AlmacenService],
  exports: [AlmacenService],
})
export class AlmacenModule {}

