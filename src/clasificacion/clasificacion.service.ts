import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clasificacion } from './entities/clasificacion.entity';
import { CreateClasificacionDto } from './dto/create-clasificacion.dto';
import { UpdateClasificacionDto } from './dto/update-clasificacion.dto';

@Injectable()
export class ClasificacionService {
  constructor(
    @InjectRepository(Clasificacion)
    private readonly clasificacionRepository: Repository<Clasificacion>,
  ) {}

  create(dto: CreateClasificacionDto) {
    const clasificacion = this.clasificacionRepository.create(dto);
    return this.clasificacionRepository.save(clasificacion);
  }

  findAll() {
    return this.clasificacionRepository.find();
  }

  findOne(id: number) {
    return this.clasificacionRepository.findOne({ where: { catId: id } });
  }

  async update(id: number, dto: UpdateClasificacionDto) {
    await this.clasificacionRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.clasificacionRepository.delete({ catId: id });
    return result.affected && result.affected > 0;
  }

}

