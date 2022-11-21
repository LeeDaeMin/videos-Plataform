import { Module } from '@nestjs/common';
import { BonusContendService } from './BonusContent.service';
import { bonusContendController } from './bonusContent.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [bonusContendController],
  providers: [BonusContendService, PrismaService]
})
export class BonusContentModule {}
