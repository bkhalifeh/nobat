import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Injectable()
export class UtilService {
    constructor(private readonly configService: ConfigService) {}
}
