import { IdColumn, IdType } from 'src/util/database';
import { UtilService } from 'src/util/util.service';
import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
    @IdColumn()
    id: ObjectId;

    @Column()
    phoneNumber: string;
}
