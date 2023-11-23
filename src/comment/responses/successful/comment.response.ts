import { ApiProperty } from "@nestjs/swagger";
import { Comment } from "src/comment/entities/comment.entity";
import { UserResponse } from "src/user/response/successful/user.response";

export class CommentResponse {
    @ApiProperty({
        description: 'The ID of this comment is in the database.',
        example: '1'
    })
    id: string;

    @ApiProperty({
        description: 'The comment content is placed in this field.',
        example: 'Hello World!'
    })
    content: string;

    @ApiProperty({
        description: 'The information related to the comment author is placed in this field.',
    })
    author: UserResponse;

    constructor(comment: Comment) {
        this.id = comment.id.toString();
        this.author = new UserResponse(comment.author);
    }

    static fromArray(comment: Comment[]) {
        return comment.map(c => new CommentResponse(c));
    }
}