import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { Almacen } from '../../almacen/entities/almacen.entity';
import { Producto } from '../../producto/entities/producto.entity';

@Entity('Stock')
export class Stock {
  @PrimaryColumn({ name: 'Alm_id', type: 'int' })
  almId!: number;

  @PrimaryColumn({ name: 'Prod_id', type: 'int' })
  prodId!: number;

  @Column({ name: 'Stk_cantidad', type: 'int', default: 0 })
  stkCantidad!: number;

  @ManyToOne(() => Almacen, (almacen) => almacen.stocks)
  @JoinColumn({ name: 'Alm_id' })
  almacen!: Almacen;

  @ManyToOne(() => Producto, (producto) => producto.stocks)
  @JoinColumn({ name: 'Prod_id' })
  producto!: Producto;
}

