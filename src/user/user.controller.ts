import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { IdType } from 'src/database/custome.id';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    getUser(@Req() req) {
        return this.userService.findOne(req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch()
    update(@Req() req, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(req.user.id, updateUserDto);
    }
}
