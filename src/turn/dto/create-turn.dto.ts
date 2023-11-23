import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IdType } from 'src/database/custome.id';

export class CreateTurnDto {
    @ApiProperty({
        description: 'The time of the appointment you want to add (of type Date).',
        example: 1700561120528,
    })
    @Type(() => Date)
    appointment: Date;

    @ApiProperty({
        description: 'The ID of the hair salon that you want to add a new turn to.',
        example: '1',
    })
    hairSalonId: string;
}
