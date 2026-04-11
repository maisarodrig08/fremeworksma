import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { UpdateTodosDto } from '../dto/update-todos.dto';

@Injectable()
export class UpdateTodosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async update(data: UpdateTodosDto, id: string) {
    return await this.prisma.todo.update({
      where: { id },
      data,
    });
  }
}
