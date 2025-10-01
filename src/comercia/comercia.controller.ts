import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ComerciaService } from './comercia.service';
import { CreateComerciaDto } from './dto/create-comercia.dto';
import { UpdateComerciaDto } from './dto/update-comercia.dto';

@Controller('comercia')
export class ComerciaController {
  constructor(private readonly comerciaService: ComerciaService) {}

  @Post()
  create(@Body() dto: CreateComerciaDto) {
    return this.comerciaService.create(dto);
  }

  @Get()
  findAll() {
    return this.comerciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.comerciaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateComerciaDto) {
    return this.comerciaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.comerciaService.remove(id);
  }
}

