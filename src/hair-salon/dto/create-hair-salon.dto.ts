import { ApiProperty } from '@nestjs/swagger';
import { MemoryStoredFile } from 'nestjs-form-data';

export class CreateHairSalonDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    address: string;

    @ApiProperty({ type: 'file' })
    image: MemoryStoredFile;

    @ApiProperty()
    score: string;
}
