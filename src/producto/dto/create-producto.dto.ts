import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductoDto {
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  prodCodigo!: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  prodNombre!: string;
  
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  prodTamano?: number;
  
  @IsOptional()
  @IsString({ each: true })
  prodImagen?: string[];
  
  @IsString()
  @IsOptional()
  @MaxLength(200)
  prodDescripcion?: string;

  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  prodPrecio!: number;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  prodCantidad?: number;

  // 🔹 CAMBIO CLAVE: ahora acepta múltiples clasificaciones
  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  @Type(() => Number)
  catIds!: number[];
}

