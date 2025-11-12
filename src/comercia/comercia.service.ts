import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Comercia } from './entities/comercia.entity';
import { CreateComerciaDto } from './dto/create-comercia.dto';
import { UpdateComerciaDto } from './dto/update-comercia.dto';
import { Producto } from '../producto/entities/producto.entity';
import { Proveedor } from '../proveedor/entities/proveedor.entity';

@Injectable()
export class ComerciaService {
  private readonly comerciaRepository: Repository<Comercia>;
  private readonly productoRepository: Repository<Producto>;
  private readonly proveedorRepository: Repository<Proveedor>;

  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {
    this.comerciaRepository = this.dataSource.getRepository(Comercia);
    this.productoRepository = this.dataSource.getRepository(Producto);
    this.proveedorRepository = this.dataSource.getRepository(Proveedor);
  }

  async create(dto: CreateComerciaDto) {
    const producto = await this.productoRepository.findOne({
      where: { prodId: dto.prodId },
    });
    const proveedor = await this.proveedorRepository.findOne({
      where: { provId: dto.provId },
    });

    if (!producto || !proveedor) {
      throw new NotFoundException('Producto o Proveedor no encontrados');
    }

    const entity = this.comerciaRepository.create({
      comCodigo: dto.comCodigo,
      comResponsable: dto.comResponsable,
      producto,
      proveedor,
    });

    return this.comerciaRepository.save(entity);
  }

  findAll() {
    return this.comerciaRepository.find({
      relations: ['producto', 'proveedor'],
    });
  }

  findOne(id: number) {
    return this.comerciaRepository.findOne({
      where: { comId: id },
      relations: ['producto', 'proveedor'],
    });
  }

  update(id: number, dto: UpdateComerciaDto) {
    return this.comerciaRepository.update(id, dto);
  }

  remove(id: number) {
    return this.comerciaRepository.delete(id);
  }
}

