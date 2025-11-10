import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { IsOptional, IsString, IsArray, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
  @IsOptional()
  @IsString({ each: true })
  nuevasImagenes?: string[];

  // Permitir actualizar las clasificaciones también
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  @Type(() => Number)
  catIds?: number[];
}

