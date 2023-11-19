import { ApiProperty } from '@nestjs/swagger';
import { Comment } from 'src/comment/entities/comment.entity';
import { CustomeEntity } from 'src/database/custome.entity';
import { Turn } from 'src/turn/entities/turn.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToMany, OneToOne, UpdateDateColumn } from 'typeorm';

@Entity()
export class VerifyCode extends CustomeEntity {
    @Column({ unique: true })
    phoneNumber: string;

    @Column({ unique: true })
    code: string;

    @UpdateDateColumn()
    updatedAt: Date;
}
