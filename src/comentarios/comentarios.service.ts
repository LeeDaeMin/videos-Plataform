import { Injectable } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ComentariosService {
  constructor(private prisma: PrismaService) {}

  async comment(commentWhereUniqueInput: Prisma.CommentWhereUniqueInput): Promise<Comment | null> {
    return this.prisma.comment.findUnique({
      where: commentWhereUniqueInput,
    });
  }

  async comments(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CommentWhereUniqueInput;
    where?: Prisma.CommentWhereInput;
  }): Promise<Comment[]> {
    const { skip, take, cursor, where } = params;
    return this.prisma.comment.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async newComment(data: Prisma.CommentCreateInput): Promise<Comment> {
    return this.prisma.comment.create({
      data,
    });
  }
}
