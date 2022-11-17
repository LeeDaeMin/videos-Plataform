import { Test, TestingModule } from '@nestjs/testing';
import { ContenidoExtraService } from './contenido-extra.service';

describe('ContenidoExtraService', () => {
  let service: ContenidoExtraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContenidoExtraService],
    }).compile();

    service = module.get<ContenidoExtraService>(ContenidoExtraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
