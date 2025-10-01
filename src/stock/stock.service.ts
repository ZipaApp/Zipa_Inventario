import { Injectable, Inject } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Stock } from './entities/stock.entity';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Injectable()
export class StockService {
  private readonly stockRepository: Repository<Stock>;

  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {
    this.stockRepository = this.dataSource.getRepository(Stock);
  }

  create(dto: CreateStockDto) {
    const entity = this.stockRepository.create(dto);
    return this.stockRepository.save(entity);
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

  update(almId: number, prodId: number, dto: UpdateStockDto) {
    return this.stockRepository.update({ almId, prodId }, dto);
  }

  remove(almId: number, prodId: number) {
    return this.stockRepository.delete({ almId, prodId });
  }
}

