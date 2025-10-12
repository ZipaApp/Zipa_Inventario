import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
  @IsOptional()
  @IsString({ each: true })
  nuevasImagenes?: string[];
}

