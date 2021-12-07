import { PartialType } from '@nestjs/mapped-types';
import { CreateHedgehogDto } from './create-hedgehog.dto';

export class UpdateHedgehogDto extends PartialType(CreateHedgehogDto) {}
