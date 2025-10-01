import { Injectable, Inject } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Almacen } from './entities/almacen.entity';
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';

@Injectable()
export class AlmacenService {
  private readonly almacenRepository: Repository<Almacen>;

  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {
    // Obtenemos el repository desde el DataSource inyectado
    this.almacenRepository = this.dataSource.getRepository(Almacen);
  }

  create(dto: CreateAlmacenDto) {
    const entity = this.almacenRepository.create(dto);
    return this.almacenRepository.save(entity);
  }

  findAll() {
    return this.almacenRepository.find();
  }

  findOne(id: number) {
    return this.almacenRepository.findOne({ where: { almId: id } });
  }

  update(id: number, dto: UpdateAlmacenDto) {
    return this.almacenRepository.update(id, dto);
  }

  remove(id: number) {
    return this.almacenRepository.delete(id);
  }
}


