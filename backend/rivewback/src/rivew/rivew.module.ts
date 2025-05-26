import { Module } from '@nestjs/common';
import { RivewService } from './rivew.service';
import { RivewController } from './rivew.controller';

@Module({
  controllers: [RivewController],
  providers: [RivewService],
})
export class RivewModule {}
