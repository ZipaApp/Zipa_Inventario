import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ClasificacionService } from './clasificacion.service';
import { CreateClasificacionDto } from './dto/create-clasificacion.dto';
import { UpdateClasificacionDto } from './dto/update-clasificacion.dto';

@Controller('clasificacion')
export class ClasificacionController {
  constructor(private readonly clasificacionService: ClasificacionService) {}

  @Post()
  create(@Body() dto: CreateClasificacionDto) {
    return this.clasificacionService.create(dto);
  }

  @Get()
  findAll() {
    return this.clasificacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clasificacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateClasificacionDto) {
    return this.clasificacionService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clasificacionService.remove(+id);
  }
}

