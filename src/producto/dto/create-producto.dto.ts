import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateProductoDto {
  @IsInt()
  @IsNotEmpty()
  prodCodigo!: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  prodNombre!: string;

  @IsInt()
  @IsOptional()
  prodTamaño?: number;

  @IsNumber()
  @IsPositive()
  prodPrecio!: number;

  @IsInt()
  @IsOptional()
  prodCantidad?: number;

  @IsInt()
  @IsNotEmpty()
  catId!: number; // se usa para vincular con Clasificación
}

