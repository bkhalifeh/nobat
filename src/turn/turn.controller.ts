import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    Req,
} from '@nestjs/common';
import { TurnService } from './turn.service';
import { CreateTurnDto } from './dto/create-turn.dto';
import { UpdateTurnDto } from './dto/update-turn.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { parseId } from 'src/database/custome.id';

@Controller('turn')
export class TurnController {
    constructor(private readonly turnService: TurnService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Req() req, @Body() createTurnDto: CreateTurnDto) {
        return this.turnService.create(createTurnDto);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    selectTurn(@Param('id') tid: string, @Req() req) {
        return this.turnService.selectTurn(parseId(tid), parseId(req.user.id));
    }
}
