import { ApiProperty } from "@nestjs/swagger";
import { Turn } from "src/turn/entities/turn.entity";

export class TurnResponse {
    @ApiProperty({
        description: 'The ID of this turn is in the database.',
        example: '1'
    })
    id: string;

    @ApiProperty({
        type: Date,
        description: 'The time of the appointment (of type Date).',
        example: 1700561120528
    })
    appointment: Date;

    constructor(turn: Turn) {
        this.id = turn.id.toString();
        this.appointment = turn.appointment;
    }

    static fromArray(turns: Turn[]): TurnResponse[] {
        return turns.map(t => new TurnResponse(t));
    }
}