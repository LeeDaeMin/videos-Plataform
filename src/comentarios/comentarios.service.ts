import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {comentario, Prisma} from '@prisma/client';

@Injectable()
export class ComentariosService {
  constructor(private prisma: PrismaService) {}

  async comment(comentarioWhereUniqueInput: Prisma.comentarioWhereUniqueInput): Promise<comentario | null> {
    return this.prisma.comentario.findUnique({
      where: comentarioWhereUniqueInput,
    });
  }

  async comentario(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.comentarioWhereUniqueInput;
    where?: Prisma.comentarioWhereInput;
  }): Promise<comentario[]> {
    const { skip, take, cursor, where } = params;
    return this.prisma.comentario.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async newComment(data: Prisma.comentarioCreateInput): Promise<comentario> {
    return this.prisma.comentario.create({
      data,
    });
  }
}
