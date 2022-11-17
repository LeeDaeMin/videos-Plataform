import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContenidoExtraService } from './contenido-extra.service';
import { CreateContenidoExtraDto } from './dto/create-contenido-extra.dto';
import { UpdateContenidoExtraDto } from './dto/update-contenido-extra.dto';

@Controller('contenido-extra')
export class ContenidoExtraController {
  constructor(private readonly contenidoExtraService: ContenidoExtraService) {}

  @Post()
  create(@Body() createContenidoExtraDto: CreateContenidoExtraDto) {
    return this.contenidoExtraService.create(createContenidoExtraDto);
  }

  @Get()
  findAll() {
    return this.contenidoExtraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contenidoExtraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContenidoExtraDto: UpdateContenidoExtraDto) {
    return this.contenidoExtraService.update(+id, updateContenidoExtraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contenidoExtraService.remove(+id);
  }
}
