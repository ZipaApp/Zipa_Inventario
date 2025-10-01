import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity';

@Entity('Clasificacion')
export class Clasificacion {
  @PrimaryGeneratedColumn({ name: 'Cat_id' })
  catId!: number;

  @Column({ name: 'Cat_nombre', type: 'varchar', length: 50 })
  catNombre!: string;

  @OneToMany(() => Producto, (producto) => producto.clasificacion)
  productos!: Producto[];
}
