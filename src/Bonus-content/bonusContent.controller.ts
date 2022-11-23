import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonusContendService } from './BonusContent.service';
import { CreateBonusContentDto } from './dto/create-Bonus-Conten.dto';
import { BonusContent as coexModel } from '@prisma/client';


@Controller('bonusContent')
export class bonusContendController {
  constructor(private readonly BonusContendService: BonusContendService) {}

  @Get('all')
  async findAll(): Promise<coexModel[]> {
    return this.BonusContendService.contenidoExtras({});
  }
  @Get('id/:id')
  async findUnique(@Param('id') id: string): Promise<coexModel> {
    return this.BonusContendService.contenidoExtra({ id: Number(id) });
  }

  @Post('create')
  async create(@Body() CreateBonusContentDto: CreateBonusContentDto): Promise<coexModel> {
    return this.BonusContendService.newContenidoExtra(CreateBonusContentDto);
  }

  @Delete('deletecontenido/:id')
  async deletePost(@Param('id') id: string): Promise<coexModel> {
    return this.BonusContendService.deleteContenidoExtra({ id: Number(id) });
  }
}
