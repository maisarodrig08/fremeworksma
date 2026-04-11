import { Injectable, Logger } from '@nestjs/common';
import { FindAllTodosRepository } from '../repository';

@Injectable()
export class FindAllTodosUseCase {
  constructor(
    private readonly findAllTodosRepository: FindAllTodosRepository,
    private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      this.logger.log('Fetching all todos...');
      const items = await this.findAllTodosRepository.findAll();
      this.logger.log('Todos fetched sucessfufly!');
      return items;
    } catch (error) {
      this.logger.error(error);
      throw new Error('Failed to fetch todos');
    }
  }
}
