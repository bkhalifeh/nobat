import { Injectable } from '@nestjs/common';
import { SmsService } from 'src/sms/sms.service';
import { UserService } from 'src/user/user.service';
import { VerifyCodeService } from 'src/verify-code/verify-code.service';
import { VerifyCodeAuthDto } from './dto/verify.code-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly verifyCodeService: VerifyCodeService,
        private readonly smsService: SmsService,
        private readonly jwtService: JwtService,
    ) {}

    async sendVerifyCode(phoneNumber: string) {
        let user = await this.userService.findOneByPhoneNumber(phoneNumber);
        if (!user) {
            user = await this.userService.create(phoneNumber);
        }
        const code = await this.verifyCodeService.getVerifyCode(phoneNumber);
        const data = await this.smsService.sendVerifyCode(phoneNumber, code);
        return data;
    }

    async verifyCode(verifyCodeAuthDto: VerifyCodeAuthDto) {
        const vc = await this.verifyCodeService.findOneByPhoneNumber(
            verifyCodeAuthDto.phoneNumber,
        );
        if (vc.code === verifyCodeAuthDto.code) {
            const user = await this.userService.findOneByPhoneNumber(
                vc.phoneNumber,
            );
            await this.userService.verifyByPhoneNumber(user.phoneNumber);
            await this.verifyCodeService.delete(vc.id);
            return {
                access_token: this.jwtService.sign({
                    id: user.id,
                    phoneNumber: user.phoneNumber,
                }),
            };
        } else {
            await this.verifyCodeService.delete(vc.id);
            return 'Can not verified';
        }
    }
}
