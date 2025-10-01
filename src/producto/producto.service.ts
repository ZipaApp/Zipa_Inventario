import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Clasificacion } from '../clasificacion/entities/clasificacion.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    @InjectRepository(Clasificacion)
    private readonly clasificacionRepository: Repository<Clasificacion>,
  ) {}

  async create(dto: CreateProductoDto): Promise<Producto> {
    const clasificacion = await this.clasificacionRepository.findOneBy({ catId: dto.catId });
    if (!clasificacion) {
      throw new NotFoundException(`Clasificación con id ${dto.catId} no encontrada`);
    }

    const producto = this.productoRepository.create({
      ...dto,
      clasificacion,
    });

    return this.productoRepository.save(producto);
  }

  async findAll(): Promise<Producto[]> {
    return this.productoRepository.find({ relations: ['clasificacion', 'stocks', 'comercios'] });
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productoRepository.findOne({
      where: { prodId: id },
      relations: ['clasificacion', 'stocks', 'comercios'],
    });

    if (!producto) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }

    return producto;
  }

  async update(id: number, dto: UpdateProductoDto): Promise<Producto> {
    const producto = await this.findOne(id);

    if (dto.catId) {
      const clasificacion = await this.clasificacionRepository.findOneBy({ catId: dto.catId });
      if (!clasificacion) {
        throw new NotFoundException(`Clasificación con id ${dto.catId} no encontrada`);
      }
      producto.clasificacion = clasificacion;
    }

    Object.assign(producto, dto);
    return this.productoRepository.save(producto);
  }

  async remove(id: number): Promise<void> {
    const producto = await this.findOne(id);
    await this.productoRepository.remove(producto);
  }
}

