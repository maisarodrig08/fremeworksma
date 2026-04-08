import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodService } from './tod.service';
import { CreateTodoDto } from './dto/create-tod.dto';
import { UpdateTodoDto } from './dto/update-tod.dto';

@Controller('tod')
export class TodController {
  constructor(private readonly todService: TodService) {}

  @Post()
  create(@Body() createTodDto: CreateTodoDto) {
    return this.todService.create(createTodDto);
  }

  @Get()
  findAll() {
    return this.todService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodDto: UpdateTodoDto) {
    return this.todService.update(id, updateTodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todService.delete(id);
  }
}
