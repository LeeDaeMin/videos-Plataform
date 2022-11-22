import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsernameService } from './username.service';
import { CreateUsernameDto } from './dto/create-username.dto';
import {usuario as UsuarioModel} from '@prisma/client'


@Controller('username')
export class UsernameController {
  constructor(private readonly UsernameService: UsernameService) {}

  @Get('all')
  async allUsers(): Promise<UsuarioModel[]> {
    return this.UsernameService.allUsers();
  }

  @Get('/id/:id')
  async findOne(@Param('id') id: string): Promise<UsuarioModel> {
    return this.UsernameService.usuario({ id: Number(id) });
  }

  @Post('/new')
  async newUsuario(@Body() CreateUsernameDto: CreateUsernameDto): Promise<UsuarioModel> {
    return this.UsernameService.newUsuario(CreateUsernameDto);
  }
  @Delete('deleteuser/:id')
  async deletePost(@Param('id') id: string): Promise<UsuarioModel> {
    return this.UsernameService.deleteUser({ id: Number(id) });
  }

}


