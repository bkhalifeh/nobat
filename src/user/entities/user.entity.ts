import { Comment } from 'src/comment/entities/comment.entity';
import { CustomeEntity } from 'src/database/custome.entity';
import { HairSalon } from 'src/hair-salon/entities/hair-salon.entity';
import { Turn } from 'src/turn/entities/turn.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
} from 'typeorm';

@Entity()
export class User extends CustomeEntity {
    @Column({ unique: true })
    phoneNumber: string;

    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column({ default: false })
    isVerified: boolean;

    @OneToMany(() => Turn, (turn) => turn.user)
    turns: Turn[];

    @OneToOne(() => HairSalon, (hairSalon) => hairSalon.user, {
        nullable: true,
    })
    @JoinColumn()
    hairSalon: HairSalon;

    @OneToMany(() => Comment, (comment) => comment.author)
    comments: Comment[];
}
