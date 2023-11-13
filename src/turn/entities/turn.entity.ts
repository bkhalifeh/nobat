import { CustomeEntity } from 'src/database/custome.entity';
import { HairSalon } from 'src/hair-salon/entities/hair-salon.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Turn extends CustomeEntity {
    @Column()
    appointment: Date;

    @ManyToOne(() => User, (user) => user.turns, { nullable: true })
    user: User;

    @ManyToOne(() => HairSalon, (hairSalon) => hairSalon.turns)
    hairSalon: HairSalon;
}
