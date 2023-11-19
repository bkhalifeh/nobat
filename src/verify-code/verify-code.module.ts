import { Module } from '@nestjs/common';
import { VerifyCodeService } from './verify-code.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VerifyCode } from './entities/verify-code.entity';
import { UtilModule } from 'src/util/util.module';

@Module({
    imports: [TypeOrmModule.forFeature([VerifyCode]), UtilModule],
    providers: [VerifyCodeService],
    exports: [VerifyCodeService],
})
export class VerifyCodeModule {}
