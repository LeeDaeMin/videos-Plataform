import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ContenidoService {
  constructor(private prisma: PrismaService) {}

  async contenido(contenidoWhereUniqueInput: Prisma.ContenidoWhereUniqueInput): Promise<Contenido | null> {
    return this.prisma.contenido.findUnique({
      where: contenidoWhereUniqueInput,
    });
  }

  async contenidos(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ContenidoWhereUniqueInput;
    where?: Prisma.ContenidoWhereInput;
  }): Promise<Contenido[]> {
    const { skip, take, cursor, where } = params;
    return this.prisma.contenido.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async newContenido(data: Prisma.ContenidoCreateInput): Promise<Contenido> {
    return this.prisma.contenido.create({
      data,
    });
  }
}
