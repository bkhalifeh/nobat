import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { VerifyCodeService } from './verify-code.service';
import { CreateVerifyCodeDto } from './dto/create-verify-code.dto';
import { UpdateVerifyCodeDto } from './dto/update-verify-code.dto';

@Controller('verify-code')
export class VerifyCodeController {
    constructor(private readonly verifyCodeService: VerifyCodeService) {}

    @Post()
    create(@Body() createVerifyCodeDto: CreateVerifyCodeDto) {
        return this.verifyCodeService.create(createVerifyCodeDto);
    }

    @Get()
    findAll() {
        return this.verifyCodeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.verifyCodeService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateVerifyCodeDto: UpdateVerifyCodeDto,
    ) {
        return this.verifyCodeService.update(+id, updateVerifyCodeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.verifyCodeService.remove(+id);
    }
}
