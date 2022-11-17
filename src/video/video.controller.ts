import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';


@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get('id/:id')
  async video(@Param('id') id: string) {
    return this.videoService.video({ id: Number(id) });
  }

  @Post('new')
  async newVideo(@Body() data: CreateVideoDto) {
    return this.videoService.newVideo(data);
  }

}
