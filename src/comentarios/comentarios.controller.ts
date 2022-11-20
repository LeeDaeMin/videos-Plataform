import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import {  CreateUser_ComentarioDto } from './dto/create-comentario.dto';
import { user_comentario as UserComentModel} from '@prisma/client'

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly ComentariosService: ComentariosService) {}

  @Get('/id/:id')
  async getComment(@Param('id') id: string):
  Promise<UserComentModel>{
    return this.ComentariosService.comment({id: Number(id)})
  }

  @Post('/createComment')
  async createComment(@Body() dato: CreateUser_ComentarioDto): Promise<UserComentModel>{
    return this.ComentariosService.newComment(dato);
  }

  @Delete('DeleteComment/:id')
  async deletePost(@Param('id') id: string): Promise<UserComentModel> {
    return this.ComentariosService.deleteComentario({ id: Number(id) });
  }
  
}
