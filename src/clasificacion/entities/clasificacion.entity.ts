import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity';

@Entity('Clasificacion')
export class Clasificacion {
  @PrimaryGeneratedColumn({ name: 'Cat_id' })
  catId!: number;

  @Column({ name: 'Cat_nombre', type: 'varchar', length: 50 })
  catNombre!: string;

  // === RELACIÓN N-N CON PRODUCTO ===
  @ManyToMany(() => Producto, (producto) => producto.clasificaciones)
  productos!: Producto[];
}

