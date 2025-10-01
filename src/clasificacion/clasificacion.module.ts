import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clasificacion } from './entities/clasificacion.entity';
import { ClasificacionService } from './clasificacion.service';
import { ClasificacionController } from './clasificacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Clasificacion])],
  controllers: [ClasificacionController],
  providers: [ClasificacionService],
  exports: [ClasificacionService],
})
export class ClasificacionModule {}

