import { ApiProperty } from '@nestjs/swagger';
import { Comment } from 'src/comment/entities/comment.entity';
import { CustomeEntity } from 'src/database/custome.entity';
import { IdType } from 'src/database/custome.id';
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
    @ApiProperty({})
    @Column({ unique: true })
    phoneNumber: string;

    @ApiProperty({})
    @Column({ nullable: true })
    firstName: string;

    @ApiProperty({})
    @Column({ nullable: true })
    lastName: string;

    @Column({ default: false })
    isVerified: boolean;

    @OneToMany(() => Turn, (turn) => turn.user, {
        nullable: true
    })
    turns: Turn[];

    @Column({ nullable: true })
    hairSalonId: IdType;

    @OneToOne(() => HairSalon, (hairSalon) => hairSalon.user, {
        nullable: true,
        onDelete: 'SET NULL',
    })
    @JoinColumn()
    hairSalon: HairSalon;

    @OneToMany(() => Comment, (comment) => comment.author, {
        nullable: true
    })
    comments: Comment[];
}
