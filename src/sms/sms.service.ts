import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsService {
    constructor(private readonly httpService: HttpService) {}

    async sendVerifyCode(phoneNumber: string, code: string) {
        const res = await this.httpService.axiosRef.post(
            // 'https://api2.ippanel.com/api/v1/sms/pattern/normal/send',
            'http://rest.ippanel.com/v1/messages/patterns/send',
            {
                pattern_code: 's3zzqx5hqwfo5pj',
                originator: '+983000505',
                recipient: `+98${phoneNumber}`,
                values: {
                    code,
                },
            },
        );
        return res.data;
    }
}
