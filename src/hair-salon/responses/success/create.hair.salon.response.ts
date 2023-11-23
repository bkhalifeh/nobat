import { ApiProperty } from '@nestjs/swagger';
import { HairSalon } from 'src/hair-salon/entities/hair-salon.entity';

export class CreateHairSalonResponse {

    @ApiProperty({
        description: 'The ID of the created hair salon in the database is stored here.',
        example: '1'
    })
    id: string;

    @ApiProperty({
        description: 'The path of the image you have registered for your hair salon.',
        example: '/static/upload/example.png',
    })
    image: string;

    @ApiProperty({
        description: 'It is a message that explains the response status.',
        example: 'Registration of your hair salon was successful.',
    })
    message: string;

    @ApiProperty({
        description:
            "If everything progresses correctly, the value of this field is 'ok'.",
        example: 'ok',
    })
    status: string;

    constructor(hairSalon: HairSalon) {
        this.image = hairSalon.image;
        this.message = 'Registration of your hair salon was successful.';
        this.status = 'ok';
    }
}
