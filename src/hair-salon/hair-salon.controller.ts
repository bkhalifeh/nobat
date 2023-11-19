import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { HairSalonService } from './hair-salon.service';
import { CreateHairSalonDto } from './dto/create-hair-salon.dto';
import { UpdateHairSalonDto } from './dto/update-hair-salon.dto';
import { FormDataRequest } from 'nestjs-form-data';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { HairSalon } from './entities/hair-salon.entity';
import { CreatedHairSalon } from './responses/success/created.hair-salon';

@ApiTags('hair-salon')
@Controller('hair-salon')
export class HairSalonController {
    constructor(private readonly hairSalonService: HairSalonService) {}

    @ApiOperation({
        summary: 'Establishing a new hair salon.',
        description:
        "You can add a new hair salon using this path.",
    })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        type: CreateHairSalonDto,
        description: 'aaaa',
    })
    @ApiCreatedResponse({
        type: CreatedHairSalon,
        description:
        '',
    })
    @Post()
    @FormDataRequest()
    create(@Body() createHairSalonDto: CreateHairSalonDto) {
        return this.hairSalonService.create(createHairSalonDto);
    }

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
