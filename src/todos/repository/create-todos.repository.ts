import { Injectable } from '@nestjs/common';
import { CreateTodosDto } from '../dto/create-todos.dto';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class CreateTodosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateTodosDto) {
    return await this.prisma.todo.create({ data });
  }
}
