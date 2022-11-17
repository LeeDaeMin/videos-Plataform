import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContenidoExtraService } from './contenido-extra.service';
import { CreateContenidoExtraDto } from './dto/create-contenido-extra.dto';
import { UpdateContenidoExtraDto } from './dto/update-contenido-extra.dto';

@Controller('contenido-extra')
export class ContenidoExtraController {
  constructor(private readonly contenidoExtraService: ContenidoExtraService) {}

  @Get('id/:id')
  async findUnique(@Param('id') id: string) {
    return this.contenidoExtraService.contenidoExtra({ id: Number(id) });
  }

  @Post('create')
  async create(@Body() data: CreateContenidoExtraDto) {
    return this.contenidoExtraService.newContenidoExtra(data);
  }

  
}
