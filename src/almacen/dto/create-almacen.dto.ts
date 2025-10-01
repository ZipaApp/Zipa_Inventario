import { IsString, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class CreateAlmacenDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  almNombre!: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  almDireccion?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  almTelefono?: string;
}

