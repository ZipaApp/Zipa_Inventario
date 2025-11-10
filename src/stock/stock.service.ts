import { Injectable, Inject, Logger } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Stock } from './entities/stock.entity';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class StockService {
  private readonly stockRepository: Repository<Stock>;
  private readonly logger = new Logger(StockService.name);

  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource,
    @Inject('NOTIFICACIONES_SERVICE') private readonly notifClient: ClientProxy,
  ) {
    this.stockRepository = this.dataSource.getRepository(Stock);
  }

  async create(dto: CreateStockDto) {
    const entity = this.stockRepository.create(dto);
    const saved = await this.stockRepository.save(entity);

    // ✅ Uso de saved.stkCantidad y saved.stkMinimo (coherente con la entidad)
    if (saved.stkCantidad <= saved.stkMinimo) {
      this.emitirNotificacionStockBajo(saved);
    }

    return saved;
  }

  async update(almId: number, prodId: number, dto: UpdateStockDto) {
    const current = await this.findOne(almId, prodId);
    if (!current) return null;

    // Object.assign se encargará de mapear las propiedades del DTO a la entidad
    const updated = Object.assign(current, dto);
    const saved = await this.stockRepository.save(updated);

    // ✅ Uso de saved.stkCantidad y saved.stkMinimo (coherente con la entidad)
    if (saved.stkCantidad <= saved.stkMinimo) {
      this.emitirNotificacionStockBajo(saved);
    }

    return saved;
  }

  findAll() {
    return this.stockRepository.find({
      relations: ['almacen', 'producto'],
    });
  }

  findOne(almId: number, prodId: number) {
    return this.stockRepository.findOne({
      where: { almId, prodId },
      relations: ['almacen', 'producto'],
    });
  }

  remove(almId: number, prodId: number) {
    return this.stockRepository.delete({ almId, prodId });
  }

  private emitirNotificacionStockBajo(stock: Stock) {
    const event = {
      type: 'stock.bajo',
      data: {
        productoId: stock.prodId,
        almacenId: stock.almId,
        cantidad: stock.stkCantidad, // Propiedad actualizada
        minimo: stock.stkMinimo,     // Propiedad actualizada
        timestamp: new Date().toISOString(),
      },
    };

    this.logger.log(`📦 Emitiendo evento de stock bajo: ${JSON.stringify(event.data)}`);
    // Usamos 'emit' para enviar el evento al microservicio de notificaciones
    this.notifClient.emit('stock.bajo', event);
  }
}
