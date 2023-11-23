import { ApiProperty } from '@nestjs/swagger';

export class SelectTurnResponse {
    private static instance: SelectTurnResponse;

    @ApiProperty({
        description: 'It is a message that explains the response status.',
        example: 'Your turn has been successfully reserved',
    })
    message: string;

    @ApiProperty({
        description:
            "If everything progresses correctly, the value of this field is 'ok'.",
        example: 'ok',
    })
    status: string;

    private constructor() {
        this.message = 'Your turn has been successfully reserved.';
        this.status = 'ok';
    }

    public static getInstance(): SelectTurnResponse {
        if (!SelectTurnResponse.instance) {
            SelectTurnResponse.instance = new SelectTurnResponse();
        }
        return SelectTurnResponse.instance;
    }
}
