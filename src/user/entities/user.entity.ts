import { CustomeEntity } from 'src/database/custome.entity';
import { HairSalon } from 'src/hair-salon/entities/hair-salon.entity';
import { Turn } from 'src/turn/entities/turn.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class User extends CustomeEntity {

    @Column({ unique: true })
    phoneNumber: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(() => Turn, (turn) => turn.user)
    turns: Turn[];

    @OneToOne(() => HairSalon, (hairSalon) => hairSalon.user, { nullable: true })
    @JoinColumn()
    hairSalon: HairSalon;

    constructor() {
        super();
        this.turns = [];
        this.hairSalon = null;
    }
}
