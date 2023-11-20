import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { UserService } from 'src/user/user.service';
import { HairSalonService } from 'src/hair-salon/hair-salon.service';
import { Comment } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IdType } from 'src/database/custome.id';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>,
        private readonly userService: UserService,
        private readonly hairSalonService: HairSalonService,
    ) {}
    async create(
        userId: IdType,
        hairSalonId: IdType,
        createCommentDto: CreateCommentDto,
    ) {
        const user = await this.userService.findOne(userId);
        const hairSalon = await this.hairSalonService.findOne(hairSalonId);

        let newComment = this.commentRepository.create({
            content: createCommentDto.content,
            author: user,
            hairSalon,
        });
        newComment = await this.commentRepository.save(newComment);

        user.comments.push(newComment);
        await this.userService.save(user);

        hairSalon.comments.push(newComment);
        await this.hairSalonService.save(hairSalon);

        return newComment;
    }

    findAllByHairSalon(id: IdType) {
        this.hairSalonService.findOne(id);
    }
}
