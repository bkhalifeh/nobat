import { ApiProperty } from "@nestjs/swagger";

export class SendedVerifyCodeResponse {
    private static instance: SendedVerifyCodeResponse;

    @ApiProperty({
        description: 'It is a message that explains the response status.',
        example: 'The verification code has been successfully sent to the mobile phone.',
    })
    message: string;

    @ApiProperty({
        description:
            "If everything progresses correctly, the value of this field is 'ok'.",
        example: 'ok',
    })
    status: string;

    private constructor() {
        this.message = 'The verification code has been successfully sent to the phone number.';
        this.status = 'ok';
    }

    public static getInstance(): SendedVerifyCodeResponse {
        if (!SendedVerifyCodeResponse.instance) {
            SendedVerifyCodeResponse.instance = new SendedVerifyCodeResponse();
        }
        return SendedVerifyCodeResponse.instance;
    }
}