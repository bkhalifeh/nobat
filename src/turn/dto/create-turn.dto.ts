import { Type } from 'class-transformer';
import { IdType } from 'src/database/custome.id';

export class CreateTurnDto {
    @Type(() => Date)
    appointment: Date;

    hairSalonId: string;
}
