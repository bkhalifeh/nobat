import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentResponse {
    private static instance: CreateCommentResponse;

    @ApiProperty({
        description: 'It is a message that explains the response status.',
        example: 'Your comment has been successfully submitted.',
    })
    message: string;

    @ApiProperty({
        description:
            "If everything progresses correctly, the value of this field is 'ok'.",
        example: 'ok',
    })
    status: string;

    private constructor() {
        this.message = 'Your comment has been successfully submitted..';
        this.status = 'ok';
    }

    public static getInstance(): CreateCommentResponse {
        if (!CreateCommentResponse.instance) {
            CreateCommentResponse.instance = new CreateCommentResponse();
        }
        return CreateCommentResponse.instance;
    }
}