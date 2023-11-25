import { Injectable } from '@nestjs/common';
import { CreateHairSalonDto } from './dto/create-hair-salon.dto';
import { UpdateHairSalonDto } from './dto/update-hair-salon.dto';
import { HairSalon } from './entities/hair-salon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { IdType } from 'src/database/custome.id';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HairSalonService {
    constructor(
        @InjectRepository(HairSalon)
        private readonly hairSalonRepository: Repository<HairSalon>,
        private readonly userService: UserService,
        private readonly configService: ConfigService,
    ) {}

    async create(userId: IdType, createHairSalonDto: CreateHairSalonDto) {
        const { image, ...res } = createHairSalonDto;
        const user = await this.userService.findOne(userId);

        const newHairSalon = this.hairSalonRepository.create({
            ...res,
            image: `${this.configService.get<string>(
                'BASE_URL',
            )}/static/upload/${createHairSalonDto.image.originalName}`,
            user,
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
        user.hairSalon = await this.hairSalonRepository.save({
            ...newHairSalon,
        });
        await this.userService.save(user);
        return user.hairSalon;
    }

    findAll() {
        return this.hairSalonRepository.find();
    }

    findOneAndFetchComment(id: IdType) {
        this.hairSalonRepository.findOne({
            where: {
                id,
            },
            relations: {
                comments: {
                    author: true,
                },
            },
        });
    }

    findOne(id: IdType) {
        return this.hairSalonRepository.findOne({
            where: {
                id,
            },
            relations: {
                comments: {
                    author: true,
                },
                turns: true,
                user: true,
            },
        });
    }

    findOneLimited(id: IdType) {
        return this.hairSalonRepository.findOneBy({ id });
    }

    save(hairSalon: HairSalon) {
        return this.hairSalonRepository.save(hairSalon);
    }

    // update(id: number, updateHairSalonDto: UpdateHairSalonDto) {
    //     return `This action updates a #${id} hairSalon`;
    // }

    // remove(id: number) {
    //     return `This action removes a #${id} hairSalon`;
    // }
}
