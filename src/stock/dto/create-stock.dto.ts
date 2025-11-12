import { IsNumber } from 'class-validator';

export class CreateStockDto {
  @IsNumber()
  almId!: number;

  @IsNumber()
  prodId!: number;

  @IsNumber()
  stkCantidad!: number;
  
  @IsNumber()
  stkMinimo!: number;
}

