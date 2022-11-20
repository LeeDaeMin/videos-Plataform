import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { VideoModule } from './video/video.module';
import { AdminModule } from './admin/admin.module';
import { ContenidoExtraModule } from './contenido-extra/contenido-extra.module';
import { PrismaService } from './prisma.service';
import { AdminService } from './admin/admin.service';
import { ComentariosService } from './comentarios/comentarios.service';
import { ContenidoExtraService } from './contenido-extra/contenido-extra.service';
import { UsuarioService } from './usuario/usuario.service';
import { VideoService } from './video/video.service';

@Module({
  imports: [
    UsuarioModule,
    ComentariosModule,
    VideoModule,
    AdminModule,
    ContenidoExtraModule,
  ],
  controllers: [],
  providers: [
    PrismaService,
    AdminService,
    ComentariosService,
    ContenidoExtraService,
    UsuarioService,
    VideoService,
  ],
})
export class AppModule {}
