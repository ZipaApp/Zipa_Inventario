import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  create(@Body() dto: CreateStockDto) {
    return this.stockService.create(dto);
  }

  @Get()
  findAll() {
    return this.stockService.findAll();
  }

  @Get(':almId/:prodId')
  findOne(@Param('almId') almId: number, @Param('prodId') prodId: number) {
    return this.stockService.findOne(almId, prodId);
  }

  @Patch(':almId/:prodId')
  update(@Param('almId') almId: number, @Param('prodId') prodId: number, @Body() dto: UpdateStockDto) {
    return this.stockService.update(almId, prodId, dto);
  }

  @Delete(':almId/:prodId')
  remove(@Param('almId') almId: number, @Param('prodId') prodId: number) {
    return this.stockService.remove(almId, prodId);
  }
}

