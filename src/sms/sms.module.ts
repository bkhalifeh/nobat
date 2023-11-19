import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        HttpModule.register({
            headers: {
                Authorization:
                    'AccessKey f0sZUQs63-x3eCdd384glCbzdip49w0Ouo-XM8LXzjI=',
            },
        }),
    ],
    providers: [SmsService],
    exports: [SmsService],
})
export class SmsModule {}
