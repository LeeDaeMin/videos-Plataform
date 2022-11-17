import { PartialType } from '@nestjs/mapped-types';
import { CreateContenidoDto } from './create-contenido.dto';

export class UpdateContenidoDto extends PartialType(CreateContenidoDto) {}
