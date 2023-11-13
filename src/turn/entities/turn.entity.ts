import { CustomeEntity } from 'src/database/custome.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Turn extends CustomeEntity {
    @Column()
    appointment: Date;

    @ManyToOne(() => User, (user) => user.turns)
    user: User;
}
