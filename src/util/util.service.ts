import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Injectable()
export class UtilService {
    
    public static DB_TYPE: string;

    constructor(configService: ConfigService) {
        UtilService.DB_TYPE = configService.get<string>('DB_TYPE');
    }
}

