import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { admin, Prisma } from '@prisma/client';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async admin(
    adminWhereUniqueInput: Prisma.adminWhereUniqueInput,
  ): Promise<admin | null> {
    return this.prisma.admin.findUnique({
      where: adminWhereUniqueInput,
    });
  }

  async admins(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.adminWhereUniqueInput;
    where?: Prisma.adminWhereInput;
  }): Promise<admin[]> {
    const { skip, take, cursor, where } = params;
    return this.prisma.admin.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async newAdmin(data: Prisma.adminCreateInput): Promise<admin> {
    return this.prisma.admin.create({
      data,
    });
  }
}
