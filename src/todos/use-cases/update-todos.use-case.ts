import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { UpdateTodosRepository, FindTodosByIdRepository } from '../repository';
import { UpdateTodosDto } from '../dto/update-todos.dto';

@Injectable()
export class UpdateTodosUseCase {
  constructor(
    private readonly updateTodosRepository: UpdateTodosRepository,
    private readonly findTodosByIdRepository: FindTodosByIdRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string, data: UpdateTodosDto) {
    try {
      this.logger.log('Updating toDo...');

      const item = await this.findTodosByIdRepository.findById(id);

      if (!item) {
        throw new NotFoundException('ToDo not found');
      }

      const updated = await this.updateTodosRepository.update(data, id);
      this.logger.log('ToDo Update sucessfully!');
      return updated;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
