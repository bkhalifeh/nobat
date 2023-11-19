import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Injectable()
export class UtilService {
    constructor(private readonly configService: ConfigService) {}

    // static srandomNumber(min: number, max: number): number {
    //     const minCeil = Math.ceil(min);
    //     const maxFloor = Math.floor(max);
    //     return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
    // }

    randomNumber(min: number, max: number): number {
        const minCeil = Math.ceil(min);
        const maxFloor = Math.floor(max);
        return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
    }
}
