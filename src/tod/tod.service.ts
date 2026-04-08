import { Injectable } from '@nestjs/common';
import { CreateTodoUseCase, DeleteTodoUseCase, FindAllUseCase, FindTodoByIdUseCase } from './use-cases';
import { CreateTodoDto } from './dto/create-tod.dto';
import { UpdateTodoDto } from './dto/update-tod.dto';

  @Injectable()
export class TodService {
constructor(
  private readonly createTodoUseCase: CreateTodoUseCase,
  private readonly findAllTodoUseCase: FindAllUseCase,
  private readonly findTodoByIdUseCase: FindTodoByIdUseCase,
  private readonly updateTodoUseCase: UpdateTodoDto,
  private readonly deleteTodoUseCase: DeleteTodoUseCase


) {}


  create(createTodoDto: CreateTodoDto) {
    return this.createTodoUseCase.create(createTodoDto);
  }

  findAll() {
    return this.findAllTodoUseCase.findAll();
  }

  findById(id: string) {
    return this.findTodoByIdUseCase.findById(id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.updateTodoUseCase.update(id, updateTodoDto);
  }

  delete(id: string) {
    return this.deleteTodoUseCase.delete(id);
  }
}
