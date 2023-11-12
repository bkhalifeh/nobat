import { ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { UtilService } from "../util.service";

export default () => {
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