import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
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

  async create(dto: CreateProductoDto, imagePaths?: string[]): Promise<Producto> {
    // 🔹 Buscar múltiples clasificaciones por sus IDs
    const clasificaciones = await this.clasificacionRepository.findBy({ catId: In(dto.catIds) });
    if (!clasificaciones.length) {
      throw new NotFoundException('Ninguna de las clasificaciones especificadas fue encontrada');
    }

    const producto = this.productoRepository.create({
      ...dto,
      clasificaciones,
      prodImagen: imagePaths || [],
    });

    return this.productoRepository.save(producto);
  }

  async findAll(): Promise<Producto[]> {
    return this.productoRepository.find({
      relations: ['clasificaciones', 'stocks', 'comercios'],
    });
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productoRepository.findOne({
      where: { prodId: id },
      relations: ['clasificaciones', 'stocks', 'comercios'],
    });

    if (!producto) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }

    return producto;
  }

  async update(id: number, dto: UpdateProductoDto, imagePaths?: string[]): Promise<Producto> {
    const producto = await this.findOne(id);

    // 🔹 Si envía nuevas clasificaciones
    if (dto.catIds && dto.catIds.length > 0) {
      const clasificaciones = await this.clasificacionRepository.findBy({ catId: In(dto.catIds) });
      if (!clasificaciones.length) {
        throw new NotFoundException('Algunas clasificaciones no existen');
      }
      producto.clasificaciones = clasificaciones;
    }

    Object.assign(producto, dto);

    if (imagePaths && imagePaths.length > 0) {
      producto.prodImagen = [...(producto.prodImagen || []), ...imagePaths];
    }

    return this.productoRepository.save(producto);
  }

  async updateImagenes(id: number, imagePaths: string[]): Promise<Producto> {
    const producto = await this.findOne(id);
    producto.prodImagen = imagePaths;
    return this.productoRepository.save(producto);
  }

  async remove(id: number): Promise<void> {
    const producto = await this.findOne(id);
    await this.productoRepository.remove(producto);
  }
}

