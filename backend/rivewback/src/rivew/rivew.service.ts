import { Injectable } from '@nestjs/common';
import { CreateRivewDto } from './dto/create-rivew.dto';
import { UpdateRivewDto } from './dto/update-rivew.dto';

@Injectable()
export class RivewService {
  create(createRivewDto: CreateRivewDto) {
    return 'This action adds a new rivew';
  }

  findAll() {
    return `This action returns all rivew`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rivew`;
  }

  update(id: number, updateRivewDto: UpdateRivewDto) {
    return `This action updates a #${id} rivew`;
  }

  remove(id: number) {
    return `This action removes a #${id} rivew`;
  }
}
