import { Injectable, Logger } from '@nestjs/common';
import { CreateTodosRepository } from '../repository';
import { CreateTodosDto } from '../dto/create-todos.dto';

@Injectable()
export class CreateTodosUseCase {
  constructor(
    private readonly createTodosRepository: CreateTodosRepository,
    private readonly logger: Logger,
  ) {}

  async execute(data: CreateTodosDto) {
    try {
      this.logger.log('Creating toDo...');
      const item = await this.createTodosRepository.create(data);
      this.logger.log('ToDo created sucessfully');
      return item;
    } catch (error) {
      this.logger.error(error);
      throw new Error('Failed to create toDo');
    }
  }
}
