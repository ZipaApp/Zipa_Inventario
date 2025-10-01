import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { SedeService } from './sede.service';
import { CreateSedeDto } from './dto/create-sede.dto';
import { UpdateSedeDto } from './dto/update-sede.dto';

@Controller('sede')
export class SedeController {
  constructor(private readonly sedeService: SedeService) {}

  @Post()
  create(@Body() dto: CreateSedeDto) {
    return this.sedeService.create(dto);
  }

  @Get()
  findAll() {
    return this.sedeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.sedeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateSedeDto) {
    return this.sedeService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sedeService.remove(id);
  }
}

