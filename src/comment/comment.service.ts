import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {user_comentario, Prisma} from '@prisma/client';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async comment(comentarioWhereUniqueInput: Prisma.user_comentarioWhereUniqueInput): Promise<user_comentario | null> {
    return this.prisma.user_comentario.findUnique({
      where: comentarioWhereUniqueInput,
    });
  }

  async comentario(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.user_comentarioWhereUniqueInput;
    where?: Prisma.user_comentarioWhereInput;
  }): Promise<user_comentario[]> {
    const { skip, take, cursor, where } = params;
    return this.prisma.user_comentario.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async newComment(data: Prisma.user_comentarioCreateInput): Promise<user_comentario> {
    return this.prisma.user_comentario.create({
      data,
    });
  }

  async deleteComentario(where: Prisma.user_comentarioWhereUniqueInput): Promise<user_comentario> {
    return this.prisma.user_comentario.delete({
      where,
    });
  }

}
