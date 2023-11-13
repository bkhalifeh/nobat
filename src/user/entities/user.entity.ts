import { CustomeEntity } from 'src/database/custome.entity';
import { Turn } from 'src/turn/entities/turn.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class User extends CustomeEntity {

    @Column({ unique: true })
    phoneNumber: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(() => Turn, (turn) => turn.user)
    turns: Turn[]

    constructor() {
        super();
        this.turns = [];
    }
}
