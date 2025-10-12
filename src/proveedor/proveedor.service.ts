import { Injectable, Inject, NotFoundException } from '@nestjs/common';
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

  /**
   * Crea un nuevo proveedor (con o sin imágenes)
   */
  async create(dto: CreateProveedorDto, imagePaths?: string[]): Promise<Proveedor> {
    const proveedor = this.proveedorRepository.create({
      ...dto,
      provImagen: imagePaths || [], // ahora es array nativo
    });
    return this.proveedorRepository.save(proveedor);
  }

  /**
   * Devuelve todos los proveedores con sus relaciones
   */
  async findAll(): Promise<Proveedor[]> {
    return this.proveedorRepository.find({
      relations: ['sedes', 'comercios'],
    });
  }

  /**
   * Devuelve un proveedor por su id
   */
  async findOne(id: number): Promise<Proveedor> {
    const proveedor = await this.proveedorRepository.findOne({
      where: { provId: id },
      relations: ['sedes', 'comercios'],
    });

    if (!proveedor) {
      throw new NotFoundException(`Proveedor con id ${id} no encontrado`);
    }

    return proveedor;
  }

  /**
   * Actualiza un proveedor (con o sin nuevas imágenes)
   */
  async update(id: number, dto: UpdateProveedorDto, imagePaths?: string[]): Promise<Proveedor> {
    const proveedor = await this.findOne(id);

    // Actualiza los demás campos
    Object.assign(proveedor, dto);

    // Añade nuevas imágenes al array existente
    if (imagePaths && imagePaths.length > 0) {
      proveedor.provImagen = [...(proveedor.provImagen || []), ...imagePaths];
    }

    return this.proveedorRepository.save(proveedor);
  }

  /**
   * Elimina un proveedor
   */
  async remove(id: number): Promise<void> {
    const proveedor = await this.findOne(id);
    await this.proveedorRepository.remove(proveedor);
  }
}

