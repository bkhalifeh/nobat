import { ApiProperty } from '@nestjs/swagger';
import { MemoryStoredFile } from 'nestjs-form-data';

export class CreateHairSalonDto {
    @ApiProperty({
        description: 'The name of the hair salon is stored in this variable.',
        example: 'Hadi',
    })
    name: string;

    @ApiProperty({
        description: 'Put some descriptions about the hair salon in this field.',
        example: 'I am the best hair stylist.',
    })
    description: string;

    @ApiProperty({
        description: 'Place the location of the hair salon here.',
        example: 'bushehr - bushehr - emam blvd',
    })
    address: string;

    @ApiProperty({
        type: 'string',
        description: 'An image for introducing the hair salon is placed in this field.',
        format: 'binary',
    })
    image: MemoryStoredFile;

    // @ApiProperty({
    //     description: '',
    //     example: 4.5
    // })
    // score: number;
}
