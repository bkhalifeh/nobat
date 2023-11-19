import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { IdType } from 'src/database/custome.id';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}
    create(phoneNumber: string) {
        const newUser = this.usersRepository.create({ phoneNumber });
        return this.usersRepository.save(newUser);
    }

    findOne(id: IdType) {
        return this.usersRepository.findOneBy({ id });
    }

    findOneByPhoneNumber(phoneNumber: string) {
        return this.usersRepository.findOneBy({ phoneNumber });
    }

    update(id: IdType, updateUserDto: UpdateUserDto) {
        return this.usersRepository.update(id, updateUserDto);
    }

    verifyByPhoneNumber(phoneNumber: string) {
        return this.usersRepository.update(
            { phoneNumber },
            { isVerified: true },
        );
    }

    save(u: User) {
        return this.usersRepository.save(u);
    }

    // work() {
    //     const newUser = new User();
    //     newUser.phoneNumber = '+989179056283';
    //     this.usersRepository.save(newUser);
    // }
}
