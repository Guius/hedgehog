import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { HedgehogsService } from './hedgehogs.service';
import { CreateHedgehogDto } from './dto/create-hedgehog.dto';
import { UpdateHedgehogDto } from './dto/update-hedgehog.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Controller('hedgehogs')
export class HedgehogsController {
  constructor(private readonly hedgehogsService: HedgehogsService) {}

  @Post()
  create(@Body() createHedgehogDto: CreateHedgehogDto) {
    return this.hedgehogsService.create(createHedgehogDto);
  }

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.hedgehogsService.findAll(paginationQuery);
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
