import { ApiProperty } from '@nestjs/swagger';

export class UserUpdateResponse {
    private static instance: UserUpdateResponse;

    @ApiProperty({
        description:
            'If the update is successful, a message will be placed in this field.',
        example: 'The user information has been successfully updated',
    })
    message: string;

    @ApiProperty({
        description:
            'If the user information update is successful, the status is ok.',
        example: 'ok',
    })
    status: string;

    private constructor() {
        this.message = 'The user information has been successfully updated';
        this.status = 'ok';
    }

    public static getInstance(): UserUpdateResponse {
        if (!UserUpdateResponse.instance) {
            UserUpdateResponse.instance = new UserUpdateResponse();
        }

        return UserUpdateResponse.instance;
    }
}
