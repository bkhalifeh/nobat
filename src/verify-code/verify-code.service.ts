import { Injectable } from '@nestjs/common';
import { CreateVerifyCodeDto } from './dto/create-verify-code.dto';
import { UpdateVerifyCodeDto } from './dto/update-verify-code.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VerifyCode } from './entities/verify-code.entity';

@Injectable()
export class VerifyCodeService {
    constructor(
        @InjectRepository(VerifyCode)
        private verifyCodesRepository: Repository<VerifyCode>,
    ) {}
}
