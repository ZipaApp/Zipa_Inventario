import { IsString, IsNotEmpty, MaxLength, IsOptional, IsInt } from 'class-validator';

export class CreateSedeDto {
  @IsInt()
  provId!: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  sedNombre!: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  sedDireccion?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  sedTelefono?: string;
}

