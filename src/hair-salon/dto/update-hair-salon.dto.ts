import { PartialType } from '@nestjs/swagger';
import { CreateHairSalonDto } from './create-hair-salon.dto';

export class UpdateHairSalonDto extends PartialType(CreateHairSalonDto) {}
