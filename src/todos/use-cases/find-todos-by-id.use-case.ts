import { Injectable, Logger } from '@nestjs/common';
import { FindTodosByIdRepository } from '../repository';

@Injectable()
export class FindTodosByIdUseCase {
  constructor(
    private readonly findTodosByIdRepository: FindTodosByIdRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      this.logger.log('Fetching todos by id...');
      const item = await this.findTodosByIdRepository.findById(id);
      this.logger.log('Todos fetched sucessfufly!');
      return item;
    } catch (error) {
      this.logger.error(error);
      throw new Error('Failed to fetch todos');
    }
  }
}
