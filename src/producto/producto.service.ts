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

  /**
   * Crea un nuevo producto y guarda las rutas de sus imágenes
   */
  async create(dto: CreateProductoDto, imagePaths?: string[]): Promise<Producto> {
    const clasificacion = await this.clasificacionRepository.findOneBy({ catId: dto.catId });
    if (!clasificacion) {
      throw new NotFoundException(`Clasificación con id ${dto.catId} no encontrada`);
    }

    const producto = this.productoRepository.create({
      ...dto,
      clasificacion,
      prodImagen: imagePaths || [],
    });

    return this.productoRepository.save(producto);
  }

  /**
   * Devuelve todos los productos con sus relaciones
   */
  async findAll(): Promise<Producto[]> {
    return this.productoRepository.find({
      relations: ['clasificacion', 'stocks', 'comercios'],
    });
  }

  /**
   * Devuelve un producto por su id
   */
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

  /**
   * Actualiza un producto y sus imágenes si se proporcionan
   */
  async update(id: number, dto: UpdateProductoDto, imagePaths?: string[]): Promise<Producto> {
    const producto = await this.findOne(id);

    if (dto.catId) {
      const clasificacion = await this.clasificacionRepository.findOneBy({ catId: dto.catId });
      if (!clasificacion) {
        throw new NotFoundException(`Clasificación con id ${dto.catId} no encontrada`);
      }
      producto.clasificacion = clasificacion;
    }

    // Actualiza los demás campos
    Object.assign(producto, dto);

    // Si se suben nuevas imágenes, las añade al arreglo existente
    if (imagePaths && imagePaths.length > 0) {
      producto.prodImagen = [...(producto.prodImagen || []), ...imagePaths];
    }

    return this.productoRepository.save(producto);
  }

  /**
   * Actualiza solo las imágenes de un producto (reemplazando las existentes)
   */
  async updateImagenes(id: number, imagePaths: string[]): Promise<Producto> {
    const producto = await this.findOne(id);

    if (!producto) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }

    // Reemplaza completamente las imágenes existentes
    producto.prodImagen = imagePaths;

    return this.productoRepository.save(producto);
  }

  /**
   * Elimina un producto
   */
  async remove(id: number): Promise<void> {
    const producto = await this.findOne(id);
    await this.productoRepository.remove(producto);
  }
}

