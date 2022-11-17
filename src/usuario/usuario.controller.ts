import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';


@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('/id/:id')
  async findOne(@Param('id') id: string) {
    return this.usuarioService.usuario({ id: Number(id) });
  }

  @Post('/new')
  async newUsuario(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.newUsuario(createUsuarioDto);
  }

}


