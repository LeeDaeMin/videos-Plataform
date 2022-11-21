import { PartialType } from '@nestjs/mapped-types';
import { CreateBonusContentDto } from './create-Bonus-Conten.dto';

export class UpdateContenidoExtraDto extends PartialType(CreateBonusContentDto) {}
