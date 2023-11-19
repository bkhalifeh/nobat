import { MemoryStoredFile } from "nestjs-form-data";

export class CreateHairSalonDto {
    name: string;
    description: string;
    address: string;
    image: MemoryStoredFile;
    score: string;
}
