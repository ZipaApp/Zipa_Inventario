import { Injectable, Inject } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Proveedor } from './entities/proveedor.entity';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';

@Injectable()
export class ProveedorService {
  private readonly proveedorRepository: Repository<Proveedor>;

  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {
    this.proveedorRepository = this.dataSource.getRepository(Proveedor);
  }

  create(dto: CreateProveedorDto) {
    const entity = this.proveedorRepository.create(dto);
    return this.proveedorRepository.save(entity);
  }

  findAll() {
    return this.proveedorRepository.find({
      relations: ['sedes', 'comercios'],
    });
  }

  findOne(id: number) {
    return this.proveedorRepository.findOne({
      where: { provId: id },
      relations: ['sedes', 'comercios'],
    });
  }

  update(id: number, dto: UpdateProveedorDto) {
    return this.proveedorRepository.update(id, dto);
  }

  remove(id: number) {
    return this.proveedorRepository.delete(id);
  }
}

