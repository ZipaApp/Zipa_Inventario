import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join, extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  // 🔹 Crear producto SIN imágenes
  @Post()
  create(@Body() dto: CreateProductoDto) {
    return this.productoService.create(dto);
  }

  // 🔹 Crear producto CON múltiples imágenes
  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('prodImagen', 5, {
      storage: diskStorage({
        destination: join(__dirname, '..', '..', 'uploads', 'productos'),
        filename: (req, file, cb) => {
          const uniqueName = `${uuidv4()}${extname(file.originalname)}`;
          cb(null, uniqueName);
        },
      }),
    }),
  )
  async createWithImages(
    @UploadedFiles() prodImagen: Express.Multer.File[],
    @Body() dto: CreateProductoDto,
  ) {
    const rutas = prodImagen.map((img) => `/uploads/productos/${img.filename}`);
    return this.productoService.create(dto, rutas);
  }

  // 🔹 Obtener todos los productos
  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  // 🔹 Obtener un producto por su ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoService.findOne(+id);
  }

  // 🔹 Actualizar producto (puede incluir imágenes nuevas)
  @Patch(':id')
  @UseInterceptors(
    FilesInterceptor('prodImagen', 5, {
      storage: diskStorage({
        destination: join(__dirname, '..', '..', 'uploads', 'productos'),
        filename: (req, file, cb) => {
          const uniqueName = `${uuidv4()}${extname(file.originalname)}`;
          cb(null, uniqueName);
        },
      }),
    }),
  )
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateProductoDto,
    @UploadedFiles() prodImagen?: Express.Multer.File[],
  ) {
    const rutas = prodImagen?.map((img) => `/uploads/productos/${img.filename}`) || [];
    return this.productoService.update(+id, dto, rutas);
  }

  // 🔹 Actualizar SOLO las imágenes de un producto
  @Patch(':id/imagenes')
  @UseInterceptors(
    FilesInterceptor('prodImagen', 5, {
      storage: diskStorage({
        destination: join(__dirname, '..', '..', 'uploads', 'productos'),
        filename: (req, file, cb) => {
          const uniqueName = `${uuidv4()}${extname(file.originalname)}`;
          cb(null, uniqueName);
        },
      }),
    }),
  )
  async updateImages(
    @Param('id') id: string,
    @UploadedFiles() prodImagen: Express.Multer.File[],
  ) {
    const rutas = prodImagen.map((img) => `/uploads/productos/${img.filename}`);
    return this.productoService.updateImagenes(+id, rutas);
  }

  // 🔹 Eliminar producto
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productoService.remove(+id);
  }
}

