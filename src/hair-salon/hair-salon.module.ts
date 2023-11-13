import { Module } from '@nestjs/common';
import { HairSalonService } from './hair-salon.service';
import { HairSalonController } from './hair-salon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HairSalon } from './entities/hair-salon.entity';

@Module({
    imports: [TypeOrmModule.forFeature([HairSalon])],
    controllers: [HairSalonController],
    providers: [HairSalonService],
})
export class HairSalonModule {}
