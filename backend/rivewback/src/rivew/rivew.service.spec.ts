import { Test, TestingModule } from '@nestjs/testing';
import { RivewService } from './rivew.service';

describe('RivewService', () => {
  let service: RivewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RivewService],
    }).compile();

    service = module.get<RivewService>(RivewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
