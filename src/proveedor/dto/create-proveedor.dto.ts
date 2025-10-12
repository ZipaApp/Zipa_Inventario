
import { IsString, IsNotEmpty, MaxLength, IsOptional, IsInt, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProveedorDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  provRazonSocial!: string;

  @IsInt()
  @Type(() => Number)
  provNit!: number;

  @IsString()
  @IsOptional()
  @MaxLength(70)
  provResponsable?: string;

  @IsString()
  @IsOptional()
  @MaxLength(70)
  provCorreo?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  provTelefono?: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  provImagen?: string[];
}

