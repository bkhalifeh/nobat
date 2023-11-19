import { ApiProperty } from '@nestjs/swagger';
import { MemoryStoredFile } from 'nestjs-form-data';

export class CreateHairSalonDto {
    @ApiProperty({
        description: "The name of the hair salon you want to add.",
        example: 'آرایشگاه هادی'
    })
    name: string;

    @ApiProperty({
        description: "The description related to introducing the salon goes in this field.",
        example: 'یک آرایشگاه خوب که موهای شما را درست اصلاح میکند'
    })
    description: string;

    @ApiProperty({
        description: "Put the salon address in this field.",
        example: 'بوشهر - بوشهر - خیابان سنگی'
    })
    address: string;

    @ApiProperty({ type: 'file',
    description: "A simple photo for introducing the salon." })
    image: MemoryStoredFile;

    // @ApiProperty({
    //     description: '',
    //     example: 4.5
    // })
    // score: number;
}
