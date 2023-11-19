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
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('hair-salon')
@Controller('hair-salon')
export class HairSalonController {
    constructor(private readonly hairSalonService: HairSalonService) {}

    @Post()
    @ApiConsumes('multipart/form-data')
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
