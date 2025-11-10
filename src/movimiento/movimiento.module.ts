import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimiento } from './entities/movimiento.entity';
import { MovimientoService } from './movimiento.service';
import { MovimientoController } from './movimiento.controller';
import { Producto } from '../producto/entities/producto.entity';
import { Almacen } from '../almacen/entities/almacen.entity';
import { Stock } from '../stock/entities/stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movimiento, Producto, Almacen, Stock])],
  controllers: [MovimientoController],
  providers: [MovimientoService],
  exports: [MovimientoService],
})
export class MovimientoModule {}

