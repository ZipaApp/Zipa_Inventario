import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movimiento } from './entities/movimiento.entity';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { UpdateMovimientoDto } from './dto/update-movimiento.dto';
import { Producto } from '../producto/entities/producto.entity';
import { Almacen } from '../almacen/entities/almacen.entity';
import { Stock } from '../stock/entities/stock.entity';

@Injectable()
export class MovimientoService {
  constructor(
    @InjectRepository(Movimiento)
    private movimientoRepo: Repository<Movimiento>,

    @InjectRepository(Producto)
    private productoRepo: Repository<Producto>,

    @InjectRepository(Almacen)
    private almacenRepo: Repository<Almacen>,

    @InjectRepository(Stock)
    private stockRepo: Repository<Stock>,
  ) {}

  async create(dto: CreateMovimientoDto) {
    const producto = await this.productoRepo.findOne({ where: { prodId: dto.prodId } });
    if (!producto) throw new NotFoundException('Producto no encontrado');

    const almacen = await this.almacenRepo.findOne({ where: { almId: dto.almId } });
    if (!almacen) throw new NotFoundException('Almacén no encontrado');

    // Buscar o crear stock
    let stock = await this.stockRepo.findOne({
      where: { producto: { prodId: producto.prodId }, almacen: { almId: almacen.almId } },
      relations: ['producto', 'almacen'],
    });

    if (!stock) {
      stock = this.stockRepo.create({
        producto,
        almacen,
        stkCantidad: 0,
      });
    }

    // Actualizar stock según el tipo
    if (dto.movTipo === 'entrada') {
      stock.stkCantidad += dto.movCantidad;
    } else if (dto.movTipo === 'salida') {
      if (stock.stkCantidad < dto.movCantidad) {
        throw new BadRequestException('Cantidad insuficiente en stock');
      }
      stock.stkCantidad -= dto.movCantidad;
    } else {
      throw new BadRequestException('Tipo de movimiento inválido (debe ser "entrada" o "salida")');
    }

    await this.stockRepo.save(stock);

    const movimiento = this.movimientoRepo.create({
      ...dto,
      producto,
      almacen,
    });
    return this.movimientoRepo.save(movimiento);
  }

  async findAll() {
    return this.movimientoRepo.find({
      order: { Movfecha: 'DESC' },
    });
  }

  async findOne(id: number) {
    const movimiento = await this.movimientoRepo.findOne({ where: { Movid: id } });
    if (!movimiento) throw new NotFoundException('Movimiento no encontrado');
    return movimiento;
  }

  async update(id: number, dto: UpdateMovimientoDto) {
    const movimiento = await this.findOne(id);
    Object.assign(movimiento, dto);
    return this.movimientoRepo.save(movimiento);
  }

  async remove(id: number) {
    const movimiento = await this.findOne(id);
    await this.movimientoRepo.remove(movimiento);
    return { message: 'Movimiento eliminado' };
  }
}

