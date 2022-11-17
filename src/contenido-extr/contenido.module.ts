import { Module } from '@nestjs/common';
import { ContenidoService } from './contenido.service';
import { ContenidoController } from './contenido.controller';

@Module({
  controllers: [ContenidoController],
  providers: [ContenidoService]
})
export class ContenidoModule {}
