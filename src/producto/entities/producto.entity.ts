import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Clasificacion } from '../../clasificacion/entities/clasificacion.entity';
import { Stock } from '../../stock/entities/stock.entity';
import { Comercia } from '../../comercia/entities/comercia.entity';

@Entity('Producto')
export class Producto {
  @PrimaryGeneratedColumn({ name: 'Prod_id' })
  prodId!: number;

  @Column({ name: 'Prod_codigo', type: 'int', unique: true })
  prodCodigo!: number;

  @Column({ name: 'Prod_nombre', type: 'varchar', length: 50 })
  prodNombre!: string;

  @Column({ name: 'Prod_tamaño', type: 'int', nullable: true })
  prodTamano!: number;

  @Column({ name: 'Prod_precio', type: 'numeric', precision: 10, scale: 2 })
  prodPrecio!: number;

  @Column({ name: 'Prod_cantidad', type: 'int', default: 0 })
  prodCantidad!: number;
  
  @Column({ name: 'Prod_descripcion', type: 'varchar', length: 200, nullable: true })
  prodDescripcion?: string;
  
  @Column({ name: 'Prod_imagen', type: 'text', nullable: true })
  prodImagen?: string[];
  
  @ManyToOne(() => Clasificacion, (clasificacion) => clasificacion.productos)
  @JoinColumn({ name: 'Cat_id' })
  clasificacion!: Clasificacion;

  @OneToMany(() => Stock, (stock) => stock.producto)
  stocks!: Stock[];

  @OneToMany(() => Comercia, (comercia) => comercia.producto)
  comercios!: Comercia[];
}
