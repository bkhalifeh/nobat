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
import {
    ApiBearerAuth,
    ApiBody,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';
import { CreateTurnResponse } from './responses/successful/create.turn.response';
import { SelectTurnResponse } from './responses/successful/select.turn.response';

@ApiTags('turn')
@Controller('turn')
export class TurnController {
    constructor(private readonly turnService: TurnService) {}

    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Adding a new turn',
        description:
            'By sending the required data using the POST method to this path, you can create a new turn at the hair salon.',
    })
    @ApiBody({
        type: CreateTurnDto,
        description:
            'The CreateTurnDto class is where you place the data related to creating a new turn.',
    })
    @ApiCreatedResponse({
        type: CreateTurnResponse,
        description:
            'If the turn registration is successful, an object of the CreateTurnResponse class is sent, providing information about the turn.',
    })
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Req() req, @Body() createTurnDto: CreateTurnDto) {
        const turn = await this.turnService.create(
            parseId(req.user.id),
            createTurnDto,
        );
        return new CreateTurnResponse(turn);
    }

    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Turn reservation',
        description:
            'By sending a request to this path using the PATCH method, you can reserve an turn for the user.',
    })
    @ApiParam({
        type: String,
        name: 'id',
        example: '1',
        description: 'The ID of the turn you want to reserve.',
    })
    @ApiOkResponse({
        type: SelectTurnResponse,
        description:
            'If the turn reservation is successful, an object of the SelectTurnResponse class is sent, which contains the status and message."',
    })
    @UseGuards(JwtAuthGuard)
    @Patch('select/:id')
    async selectTurn(
        @Param('id') id: string,
        @Req() req,
    ): Promise<SelectTurnResponse> {
        await this.turnService.selectTurn(parseId(id), parseId(req.user.id));
        return SelectTurnResponse.getInstance();
    }
}
