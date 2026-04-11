import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodosDto } from './dto/create-todos.dto';
import { UpdateTodosDto } from './dto/update-todos.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodosDto: CreateTodosDto) {
    return this.todosService.create(createTodosDto);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodosDto: UpdateTodosDto) {
    return this.todosService.update(id, updateTodosDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.delete(id);
  }
}
