import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';
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

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  catId!: number; // se usa para vincular con Clasificación
}

