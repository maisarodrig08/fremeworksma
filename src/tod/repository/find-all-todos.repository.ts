import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-tod.dto";
import { PrismaService } from "src/shared/databases/prisma.database";



@Injectable()
export class FindTodoByIdRepository {
    constructor(private readonly prisma: PrismaService) {}



    async findAll() {
        return await this.prisma.todo.findMany();
    }
}