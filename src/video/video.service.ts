import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { video, Prisma } from '@prisma/client';

@Injectable()
export class VideoService {
  constructor(private prisma: PrismaService) {}

  async video(videoWhereUniqueInput: Prisma.videoWhereUniqueInput): Promise<video | null> {
    return this.prisma.video.findUnique({
      where: videoWhereUniqueInput,
    });
  }

  async videos(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.videoWhereUniqueInput;
    where?: Prisma.videoWhereInput;
  }): Promise<video[]> {
    const { skip, take, cursor, where } = params;
    return this.prisma.video.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async newVideo(data: Prisma.videoCreateInput): Promise<video> {
    return this.prisma.video.create({
      data,
    });
  }

}
