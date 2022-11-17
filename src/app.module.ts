import { Module } from '@nestjs/common';

import { ContenidoModule } from './contenido-extr/contenido.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { VideoModule } from './video/video.module';
import { AdminModule } from './admin/admin.module';
import { ContenidoExtraModule } from './contenido/contenido-extra.module';
import { ContenidoExtraModule } from './contenido-extra/contenido-extra.module';

@Module({
  imports: [
    ContenidoModule,
    UsuarioModule,
    ComentariosModule,
    VideoModule,
    AdminModule,
    ContenidoExtraModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
