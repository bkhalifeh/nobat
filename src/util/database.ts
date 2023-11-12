import { ObjectId, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';
import 'dotenv/config';

export function IdColumn() {
    if (process.env.DB_TYPE === 'mongodb') {
        return ObjectIdColumn({ name: '_id' });
    } else {
        return PrimaryGeneratedColumn({
            name: 'id',
            type: 'int',
            unsigned: true,
        });
    }
}

export type IdType = number | ObjectId | string;
