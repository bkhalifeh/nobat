import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { IdType } from 'src/util/database';

@Injectable()
export class UserService {
    constructor(    @InjectRepository(User)
    private usersRepository: Repository<User>,) {

    }
    create(createUserDto: CreateUserDto) {
        return 'This action adds a new user';
    }

    findOne(id: IdType) {
        return this.usersRepository.findOneBy({ id });
    }


}
