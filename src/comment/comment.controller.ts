import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import {  CreateUser_CommentDto } from './dto/create-comment.dto';
import { user_comentario as UserComentModel} from '@prisma/client'

@Controller('comentarios')
export class CommetController {
  constructor(private readonly CommentService: CommentService) {}

  @Get('/id/:id')
  async getComment(@Param('id') id: string):
  Promise<UserComentModel>{
    return this.CommentService.comment({id: Number(id)})
  }

  @Post('/createComment')
  async createComment(@Body() CreateUser_CommentDto: CreateUser_CommentDto): Promise<UserComentModel>{
    return this.CommentService.newComment(CreateUser_CommentDto);
  }

  @Delete('DeleteComment/:id')
  async deletePost(@Param('id') id: string): Promise<UserComentModel> {
    return this.CommentService.deleteComentario({ id: Number(id) });
  }
  
}
