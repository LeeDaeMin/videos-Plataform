import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { admin, Prisma } from '@prisma/client';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async admin(
    adminWhereUniqueInput: Prisma.adminWhereUniqueInput,
  ): Promise<admin | null> {
    try {
      
    return this.prisma.admin.findUnique({
      where: adminWhereUniqueInput,
    });
    } catch (error) { 
      throw new HttpException({
      status: HttpStatus.NOT_ACCEPTABLE,
      error: 'This is a custom message',
    }, HttpStatus.NOT_ACCEPTABLE, {
      cause: error
    });
    }
  }

  async admins(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.adminWhereUniqueInput;
    where?: Prisma.adminWhereInput;
  }): Promise<admin[]> {
    try {
      const { skip, take, cursor, where } = params;
    return this.prisma.admin.findMany({
      skip,
      take,
      cursor,
      where,
    });
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'No se encontro ningun administrador',
      }, HttpStatus.NOT_FOUND, {
        cause: error
      });
    }
  }

  async newAdmin(data: Prisma.adminCreateInput): Promise<admin> {
   try {
    return this.prisma.admin.create({
      data,
    });
   } catch (error) {
    throw new HttpException({
      status: HttpStatus.NOT_FOUND,
      error: 'No se pudo crear un administrador',
    }, HttpStatus.NOT_FOUND, {
      cause: error
    });
   }
  }
}
