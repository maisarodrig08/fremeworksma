import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DeleteTodosRepository, FindTodosByIdRepository } from '../repository';

@Injectable()
export class DeleteTodosUseCase {
  constructor(
    private readonly deleteTodosRepository: DeleteTodosRepository,
    private readonly findTodosByIdRepository: FindTodosByIdRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      this.logger.log('Deleting toDo...');

      const item = await this.findTodosByIdRepository.findById(id);

      if (!item) {
        throw new NotFoundException('ToDo not found');
      }

      await this.deleteTodosRepository.delete(id);
      this.logger.log('ToDo deleted sucessfully!');
      return item;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
