import { PartialType } from '@nestjs/mapped-types';
import { CreateUsernameDto } from './create-username.dto';

export class UpdateUsernameDto extends PartialType(CreateUsernameDto) {}
