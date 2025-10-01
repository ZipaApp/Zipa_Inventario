import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Sede } from '../../sede/entities/sede.entity';
import { Comercia } from '../../comercia/entities/comercia.entity';

@Entity('Proveedor')
export class Proveedor {
  @PrimaryGeneratedColumn({ name: 'Prov_id' })
  provId!: number;

  @Column({ name: 'Prov_razonSocial', type: 'varchar', length: 50 })
  provRazonSocial!: string;

  @Column({ name: 'Prov_nit', type: 'int', unique: true })
  provNit!: number;

  @Column({ name: 'Prov_responsable', type: 'varchar', length: 70, nullable: true })
  provResponsable!: string;

  @Column({ name: 'Prov_correo', type: 'varchar', length: 70, nullable: true })
  provCorreo!: string;

  @Column({ name: 'Prov_telefono', type: 'varchar', length: 20, nullable: true })
  provTelefono!: string;

  @OneToMany(() => Sede, (sede) => sede.proveedor)
  sedes!: Sede[];

  @OneToMany(() => Comercia, (comercia) => comercia.proveedor)
  comercios!: Comercia[];
}

