import { ApiProperty } from '@nestjs/swagger';
import { IdType } from 'src/database/custome.id';
import { User } from 'src/user/entities/user.entity';

export class UserResponse {
    constructor(user: User) {
        this.id = user.id.toString();
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.phoneNumber = user.phoneNumber;
    }

    @ApiProperty({
        description: 'This field contains the unique user ID in the database.',
        example: '2',
    })
    id: string;

    @ApiProperty({
        description: "This field contains the user's first name.",
        example: 'behzad',
    })
    firstName: string;

    @ApiProperty({
        description: "This field contains the user's last name.",
        example: 'khalifeh',
    })
    lastName: string;

    @ApiProperty({
        description: "The user's mobile phone number is stored in this field.",
        example: '9179056283',
    })
    phoneNumber: string;
}
