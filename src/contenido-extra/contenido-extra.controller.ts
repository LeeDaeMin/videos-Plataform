import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContenidoExtraService } from './contenido-extra.service';
import { CreateContenidoExtraDto } from './dto/create-contenido-extra.dto';
import { contenido_extra as coexModel } from '@prisma/client';


@Controller('contenido-extra')
export class ContenidoExtraController {
  constructor(private readonly contenidoExtraService: ContenidoExtraService) {}

  @Get('id/:id')
  async findUnique(@Param('id') id: string): Promise<coexModel> {
    return this.contenidoExtraService.contenidoExtra({ id: Number(id) });
  }

  @Post('create')
  async create(@Body() CreateContenidoExtraDto: CreateContenidoExtraDto): Promise<coexModel> {
    return this.contenidoExtraService.newContenidoExtra(CreateContenidoExtraDto);
  }

  @Delete('deletecontenido/:id')
  async deletePost(@Param('id') id: string): Promise<coexModel> {
    return this.contenidoExtraService.deleteContenidoExtra({ id: Number(id) });
  }
}
