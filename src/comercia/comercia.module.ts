import { Module } from '@nestjs/common';
import { ComerciaService } from './comercia.service';
import { ComerciaController } from './comercia.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ComerciaController],
  providers: [ComerciaService],
  exports: [ComerciaService],
})
export class ComerciaModule {}

