import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async admin(adminWhereUniqueInput: Prisma.AdminWhereUniqueInput): Promise<Admin | null> {
    return this.prisma.admin.findUnique({
      where: adminWhereUniqueInput,
    });
  }

  async admins(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AdminWhereUniqueInput;
    where?: Prisma.AdminWhereInput;
  }): Promise<Admin[]> {
    const { skip, take, cursor, where } = params;
    return this.prisma.admin.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async newAdmin(data: Prisma.CommentCreateInput): Promise<Admin> {
    return this.prisma.comment.create({
      data,
    });
  }
}
