import { Injectable } from '@nestjs/common';
import {
  CreateTodosUseCase,
  DeleteTodosUseCase,
  FindAllTodosUseCase,
  FindTodosByIdUseCase,
  UpdateTodosUseCase,
} from './use-cases';
import { CreateTodosDto } from './dto/create-todos.dto';
import { UpdateTodosDto } from './dto/update-todos.dto';

@Injectable()
export class TodosService {
  constructor(
    private readonly createTodosUseCase: CreateTodosUseCase,
    private readonly findAllTodosUseCase: FindAllTodosUseCase,
    private readonly findTodosByIdUseCase: FindTodosByIdUseCase,
    private readonly updateTodosUseCase: UpdateTodosUseCase,
    private readonly deleteTodosUseCase: DeleteTodosUseCase,
  ) {}

  create(createTodosDto: CreateTodosDto) {
    return this.createTodosUseCase.execute(createTodosDto);
  }

  findAll() {
    return this.findAllTodosUseCase.execute();
  }

  findById(id: string) {
    return this.findTodosByIdUseCase.execute(id);
  }

  update(id: string, updateTodosDto: UpdateTodosDto) {
    return this.updateTodosUseCase.execute(id, updateTodosDto);
  }

  delete(id: string) {
    return this.deleteTodosUseCase.execute(id);
  }
}
