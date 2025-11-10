import { IsInt, IsNotEmpty, IsString, IsIn, IsOptional } from 'class-validator';

export class CreateMovimientoDto {
  @IsInt()
  @IsNotEmpty()
  prodId!: number;

  @IsInt()
  @IsNotEmpty()
  almId!: number;

  @IsString()
  @IsIn(['entrada', 'salida'])
  movTipo!: string;

  @IsInt()
  @IsNotEmpty()
  movCantidad!: number;

  @IsOptional()
  @IsString()
  movObservacion?: string;
}

