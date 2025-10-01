import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Proveedor } from '../../proveedor/entities/proveedor.entity';

@Entity('Sede')
export class Sede {
  @PrimaryGeneratedColumn({ name: 'Sed_id' })
  sedId!: number;

  @Column({ name: 'Sed_nombre', type: 'varchar', length: 50 })
  sedNombre!: string;

  @Column({ name: 'Sed_direccion', type: 'varchar', length: 100, nullable: true })
  sedDireccion!: string;

  @Column({ name: 'Sed_telefono', type: 'varchar', length: 20, nullable: true })
  sedTelefono!: string;

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.sedes)
  @JoinColumn({ name: 'Prov_id' })
  proveedor!: Proveedor;
}

