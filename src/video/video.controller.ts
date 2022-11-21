import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import {video as videoModel} from '@prisma/client';


@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get('id/:id')
  async video(@Param('id') id: string): Promise<videoModel | null> {
    return this.videoService.video({ id: Number(id) });
  }

  @Get('vervideo/:id')
  async getComments(@Param('id') id: string): Promise<videoModel | null> {
    return this.videoService.getComments({ id: Number(id) });
  }

  @Post('new')
  async newVideo(@Body() data: CreateVideoDto) : Promise<videoModel> {
    return this.videoService.newVideo(data);
  }

  @Delete('deletevideo/:id')
  async deletePost(@Param('id') id: string): Promise<videoModel> {
    return this.videoService.deleteVideo({ id: Number(id) });
  }
}
