import { Injectable, Inject } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Comercia } from './entities/comercia.entity';
import { CreateComerciaDto } from './dto/create-comercia.dto';
import { UpdateComerciaDto } from './dto/update-comercia.dto';

@Injectable()
export class ComerciaService {
  private readonly comerciaRepository: Repository<Comercia>;

  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {
    this.comerciaRepository = this.dataSource.getRepository(Comercia);
  }

  create(dto: CreateComerciaDto) {
    const entity = this.comerciaRepository.create(dto);
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

