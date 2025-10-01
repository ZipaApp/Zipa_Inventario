import { PartialType } from '@nestjs/mapped-types';
import { CreateComerciaDto } from './create-comercia.dto';

export class UpdateComerciaDto extends PartialType(CreateComerciaDto) {}

