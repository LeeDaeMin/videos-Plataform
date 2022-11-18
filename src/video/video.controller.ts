import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import {video as videoModel} from '@prisma/client';


@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get('all')
  async findAll(): Promise<videoModel[]> {
    return this.videoService.videos({});
  }

  @Get('id/:id')
  async video(@Param('id') id: string): Promise<videoModel | null> {
    return this.videoService.video({ id: Number(id) });
  }

  @Post('new')
  async newVideo(@Body() CreateVideoDto: CreateVideoDto) : Promise<videoModel> {
    return this.videoService.newVideo(CreateVideoDto);
  }

}
