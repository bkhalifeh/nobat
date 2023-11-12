import { IdColumn, IdType } from 'src/util/database';
import { Column, Entity } from 'typeorm';

@Entity()
export class User {
    @IdColumn()
    id: IdType;

    @Column()
    phoneNumber: string;
}
