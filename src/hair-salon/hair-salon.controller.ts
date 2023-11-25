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
import { HairSalonService } from './hair-salon.service';
import { CreateHairSalonDto } from './dto/create-hair-salon.dto';
import { UpdateHairSalonDto } from './dto/update-hair-salon.dto';
import { FormDataRequest } from 'nestjs-form-data';
import {
    ApiBody,
    ApiConsumes,
    ApiOperation,
    ApiTags,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiBearerAuth,
    ApiParam,
} from '@nestjs/swagger';
import { HairSalon } from './entities/hair-salon.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateHairSalonResponse } from './responses/success/create.hair.salon.response';
import { HairSalonResponse } from './responses/success/hair.salon.response';

@ApiTags('hair-salon')
@Controller('hair-salon')
export class HairSalonController {
    constructor(private readonly hairSalonService: HairSalonService) {}

    @ApiBearerAuth('Authorization')
    @ApiConsumes('multipart/form-data')
    @ApiOperation({
        summary: 'Adding a hair salon',
        description:
            'By sending the required data using the POST method to this path, you can register a new hair salon.',
    })
    @ApiBody({
        required: true,
        type: CreateHairSalonDto,
        description:
            'By sending an object of the CreateHairSalonDto class, you can register your hair salon.',
    })
    @ApiCreatedResponse({
        description:
            'If the registration of the hair salon is successful, an object of the CreateHairSalonResponse class is sent, which contains information about the hair salon.',
        type: CreateHairSalonResponse,
    })
    @UseGuards(JwtAuthGuard)
    @Post()
    @FormDataRequest()
    async create(
        @Req() req,
        @Body() createHairSalonDto: CreateHairSalonDto,
    ): Promise<CreateHairSalonResponse> {
        const hairSalon = await this.hairSalonService.create(
            req.user.id,
            createHairSalonDto,
        );
        return new CreateHairSalonResponse(hairSalon);
    }

    @ApiOperation({
        summary: 'Retrieve a list of all hair salons',
        description:
            'By sending a GET request to this path, you can retrieve information about all hair salons.',
    })
    @ApiOkResponse({
        type: [HairSalonResponse],
        description:
            'The response to this request is sending an array of objects to the HairSalonResponse class.',
    })
    @Get()
    async findAll(): Promise<HairSalonResponse[]> {
        const hairSalons = await this.hairSalonService.findAll();
        return HairSalonResponse.fromArray(hairSalons);
    }

    @ApiOperation({
        summary: 'Retrieve information about a hair salon',
        description:
            'By sending a request to this path, you can retrieve information about a hair salon with more details.',
    })
    @ApiParam({
        type: String,
        name: 'id',
        description:
            'The ID of the hair salon for which you want to retrieve information.',
    })
    @ApiOkResponse({
        type: HairSalonResponse,
        description:
            'If the hair salon ID is correct, an object of the HairSalonResponse class will be sent, where the fields comments, turns, and user are not empty.',
    })
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<HairSalonResponse> {
        const hairSalon = await this.hairSalonService.findOne(id);
        return new HairSalonResponse(hairSalon, true);
    }

    // @Patch(':id')
    // update(
    //     @Param('id') id: string,
    //     @Body() updateHairSalonDto: UpdateHairSalonDto,
    // ) {
    //     return this.hairSalonService.update(+id, updateHairSalonDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.hairSalonService.remove(+id);
    // }
}
