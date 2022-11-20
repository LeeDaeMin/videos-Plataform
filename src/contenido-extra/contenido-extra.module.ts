import { Module } from '@nestjs/common';
import { ContenidoExtraService } from './contenido-extra.service';
import { ContenidoExtraController } from './contenido-extra.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ContenidoExtraController],
  providers: [ContenidoExtraService, PrismaService]
})
export class ContenidoExtraModule {}
