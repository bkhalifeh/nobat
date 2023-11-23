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
import {
    ApiBearerAuth,
    ApiBody,
    ApiCreatedResponse,
    ApiOperation,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';
import { CreateCommentResponse } from './responses/successful/create.comment.response';

@ApiTags('comment')
@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Submit a comment',
        description: 'By sending appropriate data using the POST method, you can express your opinion about the hair salon.'
    })
    @ApiParam({
        type: String,
        name: 'hairSalonId',
        description: 'The ID of the hair salon you want to submit your comment about.',
        example: '1'
    })
    @ApiBody({
        type: CreateCommentDto,
        description: 'By sending an object of the CreateCommentDto class, you can submit a comment about the hair salon.'
    })
    @ApiCreatedResponse({
        type: CreateCommentResponse,
        description: 'If the comment is successfully submitted, an object of the CreateCommentResponse class will be sent.'
    })
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

    // @UseGuards(JwtAuthGuard)
    // @Get(':hairSalonId')
    // getComments(@Req() req, @Param('hairSalonId') hairSalonId: string) {
    //     return this.commentService.findAllByHairSalon(hairSalonId);
    // }

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
