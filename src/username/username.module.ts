import { Module } from '@nestjs/common';
import { UsernameService } from './username.service';
import { UsernameController } from './username.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsernameController],
  providers: [UsernameService, PrismaService],
})
export class UsuarioModule {}
