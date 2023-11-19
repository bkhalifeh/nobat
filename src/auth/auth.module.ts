import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SmsModule } from 'src/sms/sms.module';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VerifyCodeModule } from 'src/verify-code/verify-code.module';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import jwtFactory from 'src/factory/jwt.factory';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './providers/jwt.stategy';

@Module({
    imports: [
        JwtModule.registerAsync({
            useFactory: jwtFactory,
            inject: [ConfigService],
        }),
        SmsModule,
        UserModule,
        VerifyCodeModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
