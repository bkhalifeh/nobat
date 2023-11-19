import { Module } from '@nestjs/common';
import { VerifyCodeService } from './verify-code.service';
import { VerifyCodeController } from './verify-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VerifyCode } from './entities/verify-code.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VerifyCode])],
    providers: [VerifyCodeService],
    exports: [VerifyCodeService],
})
export class VerifyCodeModule {}
