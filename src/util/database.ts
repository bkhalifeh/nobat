import { ObjectId, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { UtilService } from "./util.service";

export function IdColumn() {
    if (UtilService.DB_TYPE === 'mongodb') {
        return ObjectIdColumn({ name: '_id' });
    } else {
        return PrimaryGeneratedColumn({
            name: 'id',
            type: 'int',
            unsigned: true,
        });
    }
}

export type IdType = number | ObjectId;