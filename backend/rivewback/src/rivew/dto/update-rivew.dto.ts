import { PartialType } from '@nestjs/mapped-types';
import { CreateRivewDto } from './create-rivew.dto';

export class UpdateRivewDto extends PartialType(CreateRivewDto) {}
