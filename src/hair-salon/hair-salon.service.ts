import { Injectable } from '@nestjs/common';
import { CreateHairSalonDto } from './dto/create-hair-salon.dto';
import { UpdateHairSalonDto } from './dto/update-hair-salon.dto';
import { HairSalon } from './entities/hair-salon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { IdType } from 'src/database/custome.id';

@Injectable()
export class HairSalonService {
    constructor(
        @InjectRepository(HairSalon)
        private hairSalonRepository: Repository<HairSalon>,
    ) {}

    create(createHairSalonDto: CreateHairSalonDto) {
        const { image, ...res } = createHairSalonDto;
        const newHairSalon = this.hairSalonRepository.create({
            ...res,
            image: `/static/upload/${createHairSalonDto.image.originalName}`,
        });
        writeFileSync(
            join(
                __dirname,
                '..',
                '..',
                'static',
                'upload',
                createHairSalonDto.image.originalName,
            ),
            createHairSalonDto.image.buffer,
        );
        return this.hairSalonRepository.save(newHairSalon);
    }

    findAll() {
        return this.hairSalonRepository.find();
    }

    findOne(id: IdType) {
        return this.hairSalonRepository.findOne({
            where: {
                id
            },
            relations: {
                comments: true,
                turns: true,
                user: true
            }
        });
    }

    // update(id: number, updateHairSalonDto: UpdateHairSalonDto) {
    //     return `This action updates a #${id} hairSalon`;
    // }

    // remove(id: number) {
    //     return `This action removes a #${id} hairSalon`;
    // }
}
