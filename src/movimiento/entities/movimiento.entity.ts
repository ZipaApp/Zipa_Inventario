import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity';
import { Almacen } from '../../almacen/entities/almacen.entity';

@Entity('Movimiento')
export class Movimiento {
  @PrimaryGeneratedColumn()
  Movid!: number;

  @ManyToOne(() => Producto, { eager: true })
  @JoinColumn({ name: 'Prod_id' })
  producto!: Producto;

  @ManyToOne(() => Almacen, { eager: true })
  @JoinColumn({ name: 'Alm_id' })
  almacen!: Almacen;

  @Column({ type: 'varchar', length: 10 })
  Movtipo!: string; // 'entrada' o 'salida'

  @Column({ type: 'int' })
  Movcantidad!: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  Movobservacion!: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  Movfecha!: Date;
}

