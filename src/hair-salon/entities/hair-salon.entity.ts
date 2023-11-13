import { CustomeEntity } from 'src/database/custome.entity';
import { Turn } from 'src/turn/entities/turn.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class HairSalon extends CustomeEntity {
    @Column()
    name: string;

    @OneToMany(() => Turn, (turn) => turn.hairSalon)
    turns: Turn[]
}
