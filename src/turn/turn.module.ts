import { Module } from '@nestjs/common';
import { TurnService } from './turn.service';
import { TurnController } from './turn.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turn } from './entities/turn.entity';
import { HairSalonModule } from 'src/hair-salon/hair-salon.module';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([Turn]), HairSalonModule, UserModule],
    controllers: [TurnController],
    providers: [TurnService],
})
export class TurnModule {}
