import { Injectable } from "@nestjs/common";
import { CreateTodDto } from "../dto/create-tod.dto";
import { PrismaService } from "src/shared/databases/prisma.database";



@Injectable()
export class FindTodoByIdRepository {
    constructor(private readonly prisma: PrismaService) {}



    async findAll() {
        return await this.prisma.todo.findMany();
    }
}