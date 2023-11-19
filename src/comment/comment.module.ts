import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { UserModule } from 'src/user/user.module';
import { HairSalonModule } from 'src/hair-salon/hair-salon.module';

@Module({
    imports: [TypeOrmModule.forFeature([Comment]), UserModule, HairSalonModule],
    controllers: [CommentController],
    providers: [CommentService],
})
export class CommentModule {}
