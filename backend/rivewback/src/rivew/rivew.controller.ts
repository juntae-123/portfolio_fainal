import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RivewService } from './rivew.service';
import { CreateRivewDto } from './dto/create-rivew.dto';
import { UpdateRivewDto } from './dto/update-rivew.dto';

@Controller('rivew')
export class RivewController {
  constructor(private readonly rivewService: RivewService) {}

  @Post()
  create(@Body() createRivewDto: CreateRivewDto) {
    return this.rivewService.create(createRivewDto);
  }

  @Get()
  findAll() {
    return this.rivewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rivewService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRivewDto: UpdateRivewDto) {
    return this.rivewService.update(+id, updateRivewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rivewService.remove(+id);
  }
}
