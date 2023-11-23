import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiProperty({
        description:
            'The first name that you want to set as the new first name for the user.',
        example: 'behzad',
    })
    firstName: string;

    @ApiProperty({
        description:
            'The last name that you want to set as the new last name for the user.',
        example: 'khalifeh',
    })
    lastName: string;
}
