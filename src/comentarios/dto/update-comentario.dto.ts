import { PartialType } from '@nestjs/mapped-types';
import { CreateUser_ComentarioDto } from './create-comentario.dto';

export class UpdateComentarioDto extends PartialType(CreateUser_ComentarioDto) {}
