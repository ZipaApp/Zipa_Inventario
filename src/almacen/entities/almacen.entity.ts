import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Stock } from '../../stock/entities/stock.entity';

@Entity('Almacen')
export class Almacen {
  @PrimaryGeneratedColumn({ name: 'Alm_id' })
  almId!: number;

  @Column({ name: 'Alm_nombre', type: 'varchar', length: 50 })
  almNombre!: string;

  @Column({ name: 'Alm_direccion', type: 'varchar', length: 100, nullable: true })
  almDireccion!: string;

  @Column({ name: 'Alm_telefono', type: 'varchar', length: 20, nullable: true })
  almTelefono!: string;

  @OneToMany(() => Stock, (stock) => stock.almacen)
  stocks!: Stock[];
}

