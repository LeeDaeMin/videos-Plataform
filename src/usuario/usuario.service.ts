import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { usuario, Prisma } from '@prisma/client';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async usuario(usuarioWhereUniqueInput: Prisma.usuarioWhereUniqueInput): Promise<usuario | null> {
    return this.prisma.usuario.findUnique({
      where: usuarioWhereUniqueInput,
    });
  }

  async usuarios(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.usuarioWhereUniqueInput;
    where?: Prisma.usuarioWhereInput;
  }): Promise<usuario[]> {
    const { skip, take, cursor, where } = params;
    return this.prisma.usuario.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async newUsuario(data: Prisma.usuarioCreateInput): Promise<usuario> {
    return this.prisma.usuario.create({
      data,
    });
  }
}
