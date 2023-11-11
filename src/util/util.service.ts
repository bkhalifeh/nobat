import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Injectable()
export class UtilService {
    
    @Inject(ConfigService)
    private static configService: ConfigService;
    
    public static PkId() {
        if (UtilService.configService.get<string>('DB_TYPE') === 'mongodb') {
            return ObjectIdColumn({ name: '_id' });
        } else {
            return PrimaryGeneratedColumn({
                name: 'id',
                type: 'int',
                unsigned: true,
            });
        }
    }
}
