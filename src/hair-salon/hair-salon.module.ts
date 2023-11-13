import { Module } from '@nestjs/common';
import { HairSalonService } from './hair-salon.service';
import { HairSalonController } from './hair-salon.controller';

@Module({
  controllers: [HairSalonController],
  providers: [HairSalonService]
})
export class HairSalonModule {}
