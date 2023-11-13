import { Injectable } from '@nestjs/common';
import { CreateHairSalonDto } from './dto/create-hair-salon.dto';
import { UpdateHairSalonDto } from './dto/update-hair-salon.dto';

@Injectable()
export class HairSalonService {
    create(createHairSalonDto: CreateHairSalonDto) {
        return 'This action adds a new hairSalon';
    }

    findAll() {
        return `This action returns all hairSalon`;
    }

    findOne(id: number) {
        return `This action returns a #${id} hairSalon`;
    }

    update(id: number, updateHairSalonDto: UpdateHairSalonDto) {
        return `This action updates a #${id} hairSalon`;
    }

    remove(id: number) {
        return `This action removes a #${id} hairSalon`;
    }
}
