import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VerifyCode } from './entities/verify-code.entity';
import { UtilService } from 'src/util/util.service';
import { IdType } from 'src/database/custome.id';

@Injectable()
export class VerifyCodeService {
    constructor(
        @InjectRepository(VerifyCode)
        private verifyCodesRepository: Repository<VerifyCode>,
        private readonly utilService: UtilService,
    ) {}

    async getVerifyCode(phoneNumber: string): Promise<string> {
        let verifyCode = await this.verifyCodesRepository.findOneBy({
            phoneNumber,
        });
        const code = this.utilService
            .randomNumber(1, 999999)
            .toString()
            .padStart(6, '0');
        if (verifyCode) {
            throw new NotImplementedException(
                'VerifyCodeService - getVerifyCode',
            );
        } else {
            verifyCode = await this.verifyCodesRepository.save({
                phoneNumber,
                code,
            });
        }
        return verifyCode.code;
    }

    async findOneByPhoneNumber(phoneNumber: string) {
        return this.verifyCodesRepository.findOneBy({ phoneNumber });
    }

    delete(id: IdType) {
        return this.verifyCodesRepository.delete(id);
    }
}
