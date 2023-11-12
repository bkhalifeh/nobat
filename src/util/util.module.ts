import { Module } from '@nestjs/common';
import { UtilService } from './util.service';
import { ConfigModule } from '@nestjs/config';

@Module({
    // imports: [ConfigModule],
    providers: [UtilService],
    exports: [UtilService],
})
export class UtilModule {}
