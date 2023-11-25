import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { VerifyCodeAuthDto } from './dto/verify.code-auth.dto';
import {
    ApiBody,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';
import { SendedVerifyCodeResponse } from './responses/successful/sended.verify.code.response';
import { VerifiedCodeResponse } from './responses/successful/verified.code.response';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({
        summary: 'Send verification code',
        description:
            'Enter your phone number (without 98) in the URL to receive the verification code.',
    })
    @ApiParam({
        type: String,
        name: 'phoneNumber',
        description: 'The phone number you want to send the message to.',
        example: '9179056283',
    })
    @ApiOkResponse({
        type: SendedVerifyCodeResponse,
        description:
            'If the verification code is successfully sent, an object of the SendedVerifyCodeResponse class will be sent.',
    })
    @Get('send-verify-code/:phoneNumber')
    async sendVerifyCode(
        @Param('phoneNumber') phoneNumber: string,
    ): Promise<SendedVerifyCodeResponse> {
        await this.authService.sendVerifyCode(phoneNumber);
        return SendedVerifyCodeResponse.getInstance();
    }

    @ApiOperation({
        summary: 'Check of the accuracy of the verification code.',
        description:
            'By sending the verification code and phone number to this path, you can confirm it.',
    })
    @ApiBody({
        type: VerifyCodeAuthDto,
        description:
            'To confirm, you need to send an object of the VerifyCodeAuthDto class, which contains the verification code and phone number.',
    })
    @ApiCreatedResponse({
        type: VerifiedCodeResponse,
        description:
            'If the verification is successful, an object of the VerifiedCodeResponse class will be sent, which contains a successful operation message.',
    })
    @Post('verify-code')
    verifyCode(@Body() verifyCodeAuthDto: VerifyCodeAuthDto) {
        return this.authService.verifyCode(verifyCodeAuthDto);
    }
}
