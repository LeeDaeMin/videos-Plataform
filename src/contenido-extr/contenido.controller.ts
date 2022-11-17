import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContenidoService } from './contenido.service';
import { CreateContenidoDto } from './dto/create-contenido.dto';
import { UpdateContenidoDto } from './dto/update-contenido.dto';

@Controller('contenido')
export class ContenidoController {
  constructor(private readonly ContenidoService: ContenidoService) {}

  @Get('/id/:id')
  async getContenido(@Param('id') id: string): Promise<ContenidoModel>{
    return this.ContenidoService.contenido({id: Number(id)})
  }

  @Post('/createContenido')
  async createContenido(@Body() CreateContenidoDto: CreateContenidoDto): Promise<ContenidoModel>{
    return this.ContenidoService.newContenido(CreateContenidoDto);
  }

}
