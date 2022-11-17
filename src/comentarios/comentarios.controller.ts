import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import {comentario as ComentarioModel} from '@prisma/client'

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly ComentariosService: ComentariosService) {}

  @Get('/id/:id')
  async getComment(@Param('id') id: string):
  Promise<ComentarioModel>{
    return this.ComentariosService.comment({id: Number(id)})
  }

  @Post('/createComment')
  async createComment(@Body() CreateComentarioDto: CreateComentarioDto): Promise<ComentarioModel>{
    return this.ComentariosService.newComment(CreateComentarioDto);
  }
}
