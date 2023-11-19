import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Req,
    UseGuards,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { parseId } from 'src/database/custome.id';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @UseGuards(JwtAuthGuard)
    @Post(':hairSalonId')
    create(
        @Req() req,
        @Param('hairSalonId') hairSalonId: string,
        @Body() createCommentDto: CreateCommentDto,
    ) {
        return this.commentService.create(
            parseId(req.user.id),
            parseId(hairSalonId),
            createCommentDto,
        );
    }

    @UseGuards(JwtAuthGuard)
    @Get(':hairSalonId')
    getComments(
        @Req() req,
        @Param('hairSalonId') hairSalonId: string,
    ) {
        return this.commentService.findAllByHairSalon(hairSalonId);
    }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return this.commentService.findOne(+id);
    // }

    // @Patch(':id')
    // update(
    //     @Param('id') id: string,
    //     @Body() updateCommentDto: UpdateCommentDto,
    // ) {
    //     return this.commentService.update(+id, updateCommentDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.commentService.remove(+id);
    // }
}
