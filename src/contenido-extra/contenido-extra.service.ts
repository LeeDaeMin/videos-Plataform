import { Injectable } from '@nestjs/common';
import { CreateContenidoExtraDto } from './dto/create-contenido-extra.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ContenidoExtraService {
  constructor(private prisma: PrismaService) {}

  async contenidoExtra(contenidoExtraWhereUniqueInput: Prisma.ContenidoExtraWhereUniqueInput): Promise<ContenidoExtra | null> {
    return this.prisma.contenidoExtra.findUnique({
      where: contenidoExtraWhereUniqueInput,
    });
  }

  async contenidoExtras(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ContenidoExtraWhereUniqueInput;
    where?: Prisma.ContenidoExtraWhereInput;
  }): Promise<ContenidoExtra[]> {
    const { skip, take, cursor, where } = params;
    return this.prisma.contenidoExtra.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async newContenidoExtra(data: Prisma.ContenidoExtraCreateInput): Promise<ContenidoExtra> {
    return this.prisma.contenidoExtra.create({
      data,
    });
  }
}
