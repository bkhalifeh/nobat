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
} from '@nestjs/swagger';
import { HairSalon } from './entities/hair-salon.entity';
import { CreatedHairSalon } from './responses/success/created.hair-salon';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('hair-salon')
@Controller('hair-salon')
export class HairSalonController {
    constructor(private readonly hairSalonService: HairSalonService) {}

    @ApiOperation({
        summary: 'Establishing a new hair salon.',
        description: 'You can add a new hair salon using this path.',
    })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        type: CreateHairSalonDto,
        description: 'aaaa',
    })
    @ApiCreatedResponse({
        type: CreatedHairSalon,
        description: '',
    })
    @UseGuards(JwtAuthGuard)
    @Post()
    @FormDataRequest()
    create(@Req() req, @Body() createHairSalonDto: CreateHairSalonDto) {
        return this.hairSalonService.create(req.user.id, createHairSalonDto);
    }

    @ApiOperation({
        summary: 'Establishing a new hair salon.',
        description: 'You can add a new hair salon using this path.',
    })
    @ApiOkResponse({
        type: [HairSalon],
    })
    @Get()
    findAll() {
        return this.hairSalonService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.hairSalonService.findOne(id);
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
