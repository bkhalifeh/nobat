import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { VerifyCodeAuthDto } from './dto/verify.code-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('send-verify-code/:phoneNumber')
    sendVerifyCode(@Param('phoneNumber') phoneNumber: string) {
        return this.authService.sendVerifyCode(phoneNumber);
    }

    @Post('verify-code')
    verifyCode(@Body() verifyCodeAuthDto: VerifyCodeAuthDto) {
        return this.authService.verifyCode(verifyCodeAuthDto);
    }
}
