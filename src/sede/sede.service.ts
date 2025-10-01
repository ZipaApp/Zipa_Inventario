import { Injectable, Inject } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Sede } from './entities/sede.entity';
import { CreateSedeDto } from './dto/create-sede.dto';
import { UpdateSedeDto } from './dto/update-sede.dto';

@Injectable()
export class SedeService {
  private readonly sedeRepository: Repository<Sede>;

  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {
    this.sedeRepository = this.dataSource.getRepository(Sede);
  }

  create(dto: CreateSedeDto) {
    const entity = this.sedeRepository.create(dto);
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

