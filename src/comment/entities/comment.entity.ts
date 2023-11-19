import { CustomeEntity } from 'src/database/custome.entity';
import { HairSalon } from 'src/hair-salon/entities/hair-salon.entity';
import { Turn } from 'src/turn/entities/turn.entity';
import { User } from 'src/user/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
} from 'typeorm';

@Entity()
export class Comment extends CustomeEntity {
    @Column()
    content: string;

    @ManyToOne(() => User, (user) => user.comments)
    author: User;

    @ManyToOne(() => User, (hairSalon) => hairSalon.comments)
    hairSalon: HairSalon;
}
