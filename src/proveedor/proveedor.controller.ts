import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join, extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Controller('proveedor')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) {}

  // Crear proveedor SIN imágenes
  @Post()
  create(@Body() dto: CreateProveedorDto) {
    return this.proveedorService.create(dto);
  }

  // Crear proveedor CON múltiples imágenes
  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('provImagen', 5, {
      storage: diskStorage({
        destination: join(__dirname, '..', '..', 'uploads', 'proveedores'),
        filename: (req, file, cb) => {
          const uniqueName = `${uuidv4()}${extname(file.originalname)}`;
          cb(null, uniqueName);
        },
      }),
    }),
  )
  async createWithImages(
    @UploadedFiles() provImagen: Express.Multer.File[],
    @Body() dto: CreateProveedorDto,
  ) {
    const rutas = provImagen.map((img) => `/uploads/proveedores/${img.filename}`);
    return this.proveedorService.create(dto, rutas);
  }

  // Obtener todos los proveedores
  @Get()
  findAll() {
    return this.proveedorService.findAll();
  }

  // Obtener un proveedor por su ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proveedorService.findOne(+id);
  }

  // Actualizar proveedor SIN imágenes
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProveedorDto) {
    return this.proveedorService.update(+id, dto);
  }

  // Actualizar proveedor CON nuevas imágenes
  @Patch(':id/imagenes')
  @UseInterceptors(
    FilesInterceptor('provImagen', 5, {
      storage: diskStorage({
        destination: join(__dirname, '..', '..', 'uploads', 'proveedores'),
        filename: (req, file, cb) => {
          const uniqueName = `${uuidv4()}${extname(file.originalname)}`;
          cb(null, uniqueName);
        },
      }),
    }),
  )
  async updateWithImages(
    @Param('id') id: string,
    @UploadedFiles() provImagen: Express.Multer.File[],
    @Body() dto: UpdateProveedorDto,
  ) {
    const rutas = provImagen.map((img) => `/uploads/proveedores/${img.filename}`);
    return this.proveedorService.update(+id, dto, rutas);
  }

  // Eliminar proveedor
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proveedorService.remove(+id);
  }
}

