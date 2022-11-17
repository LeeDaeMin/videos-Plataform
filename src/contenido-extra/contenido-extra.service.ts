import { Injectable } from '@nestjs/common';
import { CreateContenidoExtraDto } from './dto/create-contenido-extra.dto';
import { UpdateContenidoExtraDto } from './dto/update-contenido-extra.dto';

@Injectable()
export class ContenidoExtraService {
  create(createContenidoExtraDto: CreateContenidoExtraDto) {
    return 'This action adds a new contenidoExtra';
  }

  findAll() {
    return `This action returns all contenidoExtra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contenidoExtra`;
  }

  update(id: number, updateContenidoExtraDto: UpdateContenidoExtraDto) {
    return `This action updates a #${id} contenidoExtra`;
  }

  remove(id: number) {
    return `This action removes a #${id} contenidoExtra`;
  }
}
