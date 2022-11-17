import { Module } from '@nestjs/common';
import { ContenidoExtraService } from './contenido-extra.service';
import { ContenidoExtraController } from './contenido-extra.controller';

@Module({
  controllers: [ContenidoExtraController],
  providers: [ContenidoExtraService]
})
export class ContenidoExtraModule {}
