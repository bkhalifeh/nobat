import { Module } from '@nestjs/common';
import { HairSalonService } from './hair-salon.service';
import { HairSalonController } from './hair-salon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HairSalon } from './entities/hair-salon.entity';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { UserModule } from 'src/user/user.module';
@Module({
    imports: [
        TypeOrmModule.forFeature([HairSalon]),
        NestjsFormDataModule,
        UserModule,
    ],
    controllers: [HairSalonController],
    providers: [HairSalonService],
})
export class HairSalonModule {}
