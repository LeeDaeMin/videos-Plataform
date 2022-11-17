import { Test, TestingModule } from '@nestjs/testing';
import { ContenidoExtraController } from './contenido-extra.controller';
import { ContenidoExtraService } from './contenido-extra.service';

describe('ContenidoExtraController', () => {
  let controller: ContenidoExtraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContenidoExtraController],
      providers: [ContenidoExtraService],
    }).compile();

    controller = module.get<ContenidoExtraController>(ContenidoExtraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
