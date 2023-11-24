import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        HttpModule.register({
            headers: {
                apikey:
                    'gbKmp4KuNJbmc6_G6i8RNaqxEIX8rpbq1F-LIvgy5VI=',
            },
        }),
    ],
    providers: [SmsService],
    exports: [SmsService],
})
export class SmsModule {}
