import { ApiProperty } from '@nestjs/swagger';

export class SingletonResponse {
    private static instance: SingletonResponse;

    @ApiProperty({
        description: 'It is a message that explains the response status.',
    })
    message: string;

    @ApiProperty({
        description:
            "If everything progresses correctly, the value of this field is 'ok'.",
        example: 'ok',
    })
    status: string;

    private constructor() {
        this.message = '';
        this.status = 'ok';
    }

    protected setMessage(message: string) {
        this.message = message;
    }

    public static getInstance(): SingletonResponse {
        if (!SingletonResponse.instance) {
            SingletonResponse.instance = new SingletonResponse();
        }
        return SingletonResponse.instance;
    }
}
