import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { IdType } from 'src/database/custome.id';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import {
    ApiBearerAuth,
    ApiBody,
    ApiOkResponse,
    ApiOperation,
    ApiTags,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { UserResponse } from './response/successful/user.response';
import { UserUpdateResponse } from './response/successful/user.update.response';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({
        summary: 'Retrieve current user information',
        description:
            'By sending a GET request to this path, you can retrieve information about the user with whom you have logged in.',
    })
    @ApiOkResponse({
        type: UserResponse,
        description:
            'If everything is correct, it returns an object of the UserInfoResponse class containing information about the user.',
    })
    @UseGuards(JwtAuthGuard)
    @Get()
    async getUser(@Req() req): Promise<UserResponse> {
        const user = await this.userService.findOne(req.user.id);
        return new UserResponse(user);
    }

    @ApiOperation({
        summary: "Assigning or changing the user's first and last name.",
        description:
            'By sending a POST request to this path, you can initialize or modify user information.',
    })
    @ApiBody({
        type: UpdateUserDto,
        description:
            'Place your information in the UpdateUserDto class and send it.',
    })
    @ApiOkResponse({
        type: UserUpdateResponse,
        description:
            'If everything goes correctly, an object of the UserUpdateResponse class will be sent.',
    })
    @UseGuards(JwtAuthGuard)
    @Patch()
    async update(
        @Req() req,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<UserUpdateResponse> {
        return this.userService.update(req.user.id, updateUserDto);
    }
}
