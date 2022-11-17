import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContenidoExtraService } from './contenido-extra.service';
import { CreateContenidoExtraDto } from './dto/create-contenido-extra.dto';

@Controller('contenido-extra')
export class ContenidoExtraController {
  constructor(private readonly contenidoExtraService: ContenidoExtraService) {}

  @Get('id/:id')
  async getContenidoExtraById(@Param('id') id: string) {
    return await this.contenidoExtraService.contenidoExtra({ id: Number(id) });
  }
  
  @Post('new')
  async newContenidoExtra(@Body() createContenidoExtraDto: CreateContenidoExtraDto) {
    return await this.contenidoExtraService.newContenidoExtra(createContenidoExtraDto);
  }
}
