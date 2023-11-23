import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
    @ApiProperty({
        description: 'Put your comment in this variable.',
        example: 'Hello World!',
    })
    content: string;
}
