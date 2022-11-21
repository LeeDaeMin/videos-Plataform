import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommetController } from './comment.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CommetController],
  providers: [CommentService, PrismaService]
})
export class CommentModule {}
