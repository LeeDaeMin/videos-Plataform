import { PartialType } from '@nestjs/mapped-types';
import { CreateContenidoExtraDto } from './create-contenido-extra.dto';

export class UpdateContenidoExtraDto extends PartialType(CreateContenidoExtraDto) {}
