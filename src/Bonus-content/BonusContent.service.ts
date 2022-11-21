import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BonusContent, Prisma } from '@prisma/client';

@Injectable()
export class BonusContendService {
  constructor(private prisma: PrismaService) {}

  async contenidoExtra(BonusContentWhereUniqueInput: Prisma.BonusContentWhereUniqueInput): Promise<BonusContent | null> {
    return this.prisma.bonusContent.findUnique({
      where: BonusContentWhereUniqueInput,
    });
  }

  async contenidoExtras(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BonusContentWhereUniqueInput;
    where?: Prisma.BonusContentWhereInput;
  }): Promise<BonusContent[]> {
    const { skip, take, cursor, where } = params;
    return this.prisma.bonusContent.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async newContenidoExtra(data: Prisma.BonusContentCreateInput): Promise<BonusContent> {
   try {
    const resultado = await this.prisma.bonusContent.create({
      data,
    });
    if(!resultado){
      throw "No se encontro el documento";
    }
    return resultado
   } catch (error) {
    throw new HttpException({
      status: HttpStatus.NOT_FOUND,
      error: 'No se encontro el video',
    }, HttpStatus.NOT_FOUND, {
      cause: error
    });
   }
  }

  async deleteContenidoExtra(where: Prisma.BonusContentWhereUniqueInput): Promise<BonusContent> {
    return this.prisma.bonusContent.delete({
      where,
    });
  }
}
