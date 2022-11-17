import { Module } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ComentariosController],
  providers: [ComentariosService, PrismaService]
})
export class ComentariosModule {}
