import { PartialType } from '@nestjs/mapped-types';
import { CreateUser_CommentDto } from './create-comment.dto';

export class UpdateComentarioDto extends PartialType(CreateUser_CommentDto) {}
