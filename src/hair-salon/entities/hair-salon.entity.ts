import { CustomeEntity } from 'src/database/custome.entity';
import { Turn } from 'src/turn/entities/turn.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class HairSalon extends CustomeEntity {
    @Column({ unique: true })
    name: string;

    @Column()
    description: string;

    @Column()
    address: string;

    @Column()
    image: string;

    @Column({ default: 0 })
    score: string;

    @OneToMany(() => Turn, (turn) => turn.hairSalon)
    turns: Turn[];

    @OneToOne(() => User, (user) => user.hairSalon)
    user: User;
}
