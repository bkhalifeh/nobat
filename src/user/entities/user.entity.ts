import { CustomeEntity } from 'src/database/custome.entity';
import { IdColumn, IdType } from 'src/database/custome.id';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends CustomeEntity {

    @Column({ unique: true })
    phoneNumber: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
}
