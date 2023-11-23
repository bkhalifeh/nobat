import { ApiProperty } from '@nestjs/swagger';
import { Turn } from 'src/turn/entities/turn.entity';

export class CreateTurnResponse {
    @ApiProperty({
        description: 'In this field, the turn ID is placed.',
        example: '1',
    })
    id: string;

    @ApiProperty({
        description: 'It is a message that explains the response status.',
        example: 'The appointment has been successfully registered',
    })
    message: string;

    @ApiProperty({
        description:
            "If everything progresses correctly, the value of this field is 'ok'.",
        example: 'ok',
    })
    status: string;

    constructor(turn: Turn) {
        this.id = turn.id.toString();
        this.message = 'The turn has been successfully registered';
        this.status = 'ok';
    }
}
