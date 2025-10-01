import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateClasificacionDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  catNombre!: string;
}

