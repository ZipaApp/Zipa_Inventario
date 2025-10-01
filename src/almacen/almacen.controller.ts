import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';

@Controller('almacen')
export class AlmacenController {
  constructor(private readonly almacenService: AlmacenService) {}

  @Post()
  create(@Body() dto: CreateAlmacenDto) {
    return this.almacenService.create(dto);
  }

  @Get()
  findAll() {
    return this.almacenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.almacenService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateAlmacenDto) {
    return this.almacenService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.almacenService.remove(id);
  }
}

