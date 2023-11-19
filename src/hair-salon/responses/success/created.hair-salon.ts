import { ApiProperty } from "@nestjs/swagger";

export class CreatedHairSalon {
    @ApiProperty({
        example: 1
    })
    id: number;

    @ApiProperty({
        example: 3.4
    })
    score: number;
    
    @ApiProperty({
        example: 'آرایشگاه هادی'
    })
    name: string;

    @ApiProperty({
        example: 'یک آرایشگاه خوب که موهای شما را درست اصلاح میکند'
    })
    description: string;

    @ApiProperty({
        example: 'بوشهر - بوشهر - خیابان سنگی'
    })
    address: string;

    @ApiProperty({ example: '/static/upload/example.png', })
    image: string;

}