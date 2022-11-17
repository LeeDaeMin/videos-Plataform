import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VideoService {
  constructor(private prisma: PrismaService) {}

  async video(videoWhereUniqueInput: Prisma.VideoWhereUniqueInput): Promise<Video | null> {
    return this.prisma.video.findUnique({
      where: videoWhereUniqueInput,
    });
  }

  async videos(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.VideoWhereUniqueInput;
    where?: Prisma.VideoWhereInput;
  }): Promise<Video[]> {
    const { skip, take, cursor, where } = params;
    return this.prisma.video.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async newVideo(data: Prisma.VideoCreateInput): Promise<Video> {
    return this.prisma.video.create({
      data,
    });
  }

}
