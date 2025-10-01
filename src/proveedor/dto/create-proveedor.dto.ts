import { IsString, IsNotEmpty, MaxLength, IsOptional, IsInt } from 'class-validator';

export class CreateProveedorDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  provRazonSocial!: string;

  @IsInt()
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
}

