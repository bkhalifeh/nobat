import { ApiProperty } from '@nestjs/swagger';

export class VerifyCodeAuthDto {
    @ApiProperty({
        description: 'The mobile phone number to which the verification code has been sent.',
        example: '9179056283',
    })
    phoneNumber: string;

    @ApiProperty({
        description: 'The verification code sent to the phone number is placed in this field.',
        example: '123456',
    })
    code: string;
}
