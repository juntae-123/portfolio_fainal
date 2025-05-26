import { Test, TestingModule } from '@nestjs/testing';
import { RivewController } from './rivew.controller';
import { RivewService } from './rivew.service';

describe('RivewController', () => {
  let controller: RivewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RivewController],
      providers: [RivewService],
    }).compile();

    controller = module.get<RivewController>(RivewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
