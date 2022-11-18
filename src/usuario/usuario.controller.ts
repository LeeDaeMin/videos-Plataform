import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import {usuario as UsuarioModel} from '@prisma/client'


@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('/id/:id')
  async findOne(@Param('id') id: string): Promise<UsuarioModel> {
    return this.usuarioService.usuario({ id: Number(id) });
  }

  @Post('/new')
  async newUsuario(@Body() createUsuarioDto: CreateUsuarioDto): Promise<UsuarioModel> {
    return this.usuarioService.newUsuario(createUsuarioDto);
  }
  @Delete('deleteuser/:id')
  async deletePost(@Param('id') id: string): Promise<UsuarioModel> {
    return this.usuarioService.deleteUser({ id: Number(id) });
  }

}


