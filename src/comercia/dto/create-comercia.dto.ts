import { IsInt, IsString, IsOptional, MaxLength } from 'class-validator';

export class CreateComerciaDto {
  @IsInt()
  prodId!: number;

  @IsInt()
  provId!: number;

  @IsInt()
  comCodigo!: number;

  @IsString()
  @IsOptional()
  @MaxLength(70)
  comResponsable?: string;
}

