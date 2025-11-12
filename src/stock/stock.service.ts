import { Injectable, Inject, NotFoundException, Logger } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Stock } from './entities/stock.entity';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Almacen } from '../almacen/entities/almacen.entity';
import { Producto } from '../producto/entities/producto.entity';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class StockService {
  private readonly stockRepository: Repository<Stock>;
  private readonly almacenRepository: Repository<Almacen>;
  private readonly productoRepository: Repository<Producto>;
  private readonly logger = new Logger(StockService.name);

  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource,
    @Inject('NOTIFICACIONES_SERVICE') private readonly notifClient: ClientProxy,
  ) {
    this.stockRepository = this.dataSource.getRepository(Stock);
    this.almacenRepository = this.dataSource.getRepository(Almacen);
    this.productoRepository = this.dataSource.getRepository(Producto);
  }

  // ✅ Crear un registro de stock
  async create(dto: CreateStockDto) {
    const almacen = await this.almacenRepository.findOne({
      where: { almId: dto.almId },
    });
    if (!almacen) throw new NotFoundException('Almacén no encontrado');

    const producto = await this.productoRepository.findOne({
      where: { prodId: dto.prodId },
    });
    if (!producto) throw new NotFoundException('Producto no encontrado');

    const entity = this.stockRepository.create({
      almId: dto.almId,
      prodId: dto.prodId,
      stkCantidad: dto.stkCantidad,
      stkMinimo: dto.stkMinimo,
      almacen,
      producto,
    });

    const saved = await this.stockRepository.save(entity);

    if (saved.stkCantidad <= saved.stkMinimo) {
      this.emitirNotificacionStockBajo(saved);
    }

    return saved;
  }

  // ✅ Actualizar registro existente
  async update(almId: number, prodId: number, dto: UpdateStockDto) {
    const current = await this.findOne(almId, prodId);
    if (!current) throw new NotFoundException('Registro de stock no encontrado');

    Object.assign(current, dto);
    const saved = await this.stockRepository.save(current);

    if (saved.stkCantidad <= saved.stkMinimo) {
      this.emitirNotificacionStockBajo(saved);
    }

    return saved;
  }

  // ✅ Obtener todos los registros
  findAll() {
    return this.stockRepository.find({
      relations: ['almacen', 'producto'],
    });
  }

  // ✅ Obtener un registro específico
  findOne(almId: number, prodId: number) {
    return this.stockRepository.findOne({
      where: { almId, prodId },
      relations: ['almacen', 'producto'],
    });
  }

  // ✅ Eliminar un registro
  remove(almId: number, prodId: number) {
    return this.stockRepository.delete({ almId, prodId });
  }

  // ✅ Emitir notificación de stock bajo
  private emitirNotificacionStockBajo(stock: Stock) {
    const event = {
      type: 'stock.bajo',
      data: {
        productoId: stock.prodId,
        almacenId: stock.almId,
        cantidad: stock.stkCantidad,
        minimo: stock.stkMinimo,
        timestamp: new Date().toISOString(),
      },
    };

    this.logger.log(`📦 Emitiendo evento de stock bajo: ${JSON.stringify(event.data)}`);
    this.notifClient.emit('stock.bajo', {
      type: 'stock.bajo',
      data: {
        productoId: stock.prodId,
        almacenId: stock.almId,
        cantidad: stock.stkCantidad,
        minimo: stock.stkMinimo,
        timestamp: new Date().toISOString(),
      },
    });

  }
}

