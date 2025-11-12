import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Sede } from './entities/sede.entity';
import { CreateSedeDto } from './dto/create-sede.dto';
import { UpdateSedeDto } from './dto/update-sede.dto';
import { Proveedor } from '../proveedor/entities/proveedor.entity';

@Injectable()
export class SedeService {
  private readonly sedeRepository: Repository<Sede>;
  private readonly proveedorRepository: Repository<Proveedor>;

  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {
    this.sedeRepository = this.dataSource.getRepository(Sede);
    this.proveedorRepository = this.dataSource.getRepository(Proveedor);
  }

  async create(dto: CreateSedeDto) {
    const proveedor = await this.proveedorRepository.findOne({
      where: { provId: dto.provId },
    });

    if (!proveedor) {
      throw new NotFoundException('Proveedor no encontrado');
    }

    const entity = this.sedeRepository.create({
      sedNombre: dto.sedNombre,
      sedDireccion: dto.sedDireccion,
      sedTelefono: dto.sedTelefono,
      proveedor,
    });

    return this.sedeRepository.save(entity);
  }

  findAll() {
    return this.sedeRepository.find({
      relations: ['proveedor'],
    });
  }

  findOne(id: number) {
    return this.sedeRepository.findOne({
      where: { sedId: id },
      relations: ['proveedor'],
    });
  }

  update(id: number, dto: UpdateSedeDto) {
    return this.sedeRepository.update(id, dto);
  }

  remove(id: number) {
    return this.sedeRepository.delete(id);
  }
}

