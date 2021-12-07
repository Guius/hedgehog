import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HedgehogsService } from './hedgehogs.service';
import { CreateHedgehogDto } from './dto/create-hedgehog.dto';
import { UpdateHedgehogDto } from './dto/update-hedgehog.dto';

@Controller('hedgehogs')
export class HedgehogsController {
  constructor(private readonly hedgehogsService: HedgehogsService) {}

  @Post()
  create(@Body() createHedgehogDto: CreateHedgehogDto) {
    return this.hedgehogsService.create(createHedgehogDto);
  }

  @Get()
  findAll() {
    return this.hedgehogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hedgehogsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHedgehogDto: UpdateHedgehogDto) {
    return this.hedgehogsService.update(+id, updateHedgehogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hedgehogsService.remove(+id);
  }
}
