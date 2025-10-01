import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity';
import { Proveedor } from '../../proveedor/entities/proveedor.entity';

@Entity('Comercia')
export class Comercia {
  @PrimaryGeneratedColumn({ name: 'Com_id' })
  comId!: number;

  @Column({ name: 'Com_codigo', type: 'int' })
  comCodigo!: number;

  @Column({ name: 'Com_fecha', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  comFecha!: Date;

  @Column({ name: 'Com_responsable', type: 'varchar', length: 70, nullable: true })
  comResponsable!: string;

  @ManyToOne(() => Producto, (producto) => producto.comercios)
  @JoinColumn({ name: 'Prod_id' })
  producto!: Producto;

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.comercios)
  @JoinColumn({ name: 'Prov_id' })
  proveedor!: Proveedor;
}

