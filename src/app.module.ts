import { Module } from '@nestjs/common';
import { UsuarioModule } from './username/username.module';
import { CommentModule } from './comment/comment.module';
import { VideoModule } from './video/video.module';
import { AdminModule } from './admin/admin.module';
import { BonusContentModule } from './Bonus-content/BonusContent.module';
import { PrismaService } from './prisma.service';
import { AdminService } from './admin/admin.service';
import { CommentService } from './comment/comment.service';
import { BonusContendService } from './Bonus-content/BonusContent.service';
import { UsernameService } from './username/username.service';
import { VideoService } from './video/video.service';

@Module({
  imports: [
    UsuarioModule,
    CommentModule,
    VideoModule,
    AdminModule,
    BonusContentModule,
  ],
  controllers: [],
  providers: [
    PrismaService,
    AdminService,
    CommentService,
    BonusContendService,
    UsernameService,
    VideoService,
  ],
})
export class AppModule {}
