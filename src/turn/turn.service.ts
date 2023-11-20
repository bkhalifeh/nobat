import { Injectable } from '@nestjs/common';
import { CreateTurnDto } from './dto/create-turn.dto';
import { UpdateTurnDto } from './dto/update-turn.dto';
import { HairSalonService } from 'src/hair-salon/hair-salon.service';
import { UserService } from 'src/user/user.service';
import { IdType, parseId } from 'src/database/custome.id';
import { Turn } from './entities/turn.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TurnService {
    constructor(
        @InjectRepository(Turn)
        private turnsRepository: Repository<Turn>,
        private readonly hairSalonService: HairSalonService,
        private readonly userService: UserService,
    ) {}

    async create(createTurnDto: CreateTurnDto) {
        const hairSalon = await this.hairSalonService.findOne(
            parseId(createTurnDto.hairSalonId),
        );
        const newTurn = this.turnsRepository.create({
            hairSalon,
            appointment: createTurnDto.appointment,
        });
        return this.turnsRepository.save(newTurn);
    }

    async selectTurn(tid: IdType, uid: IdType) {
        const user = await this.userService.findOne(uid);
        let turn = await this.turnsRepository.findOne({
            where: {
                id: tid,
            },
            relations: {
                user: true,
            },
        });
        if (!turn.user) {
            turn.user = user;
            turn = await this.turnsRepository.save(turn);
            user.turns.push(turn);
            await this.userService.save(user);
            return turn;
        } else {
            return 'this turn selected';
        }
    }
}
