
import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-tod.dto";
import { PrismaService } from "src/shared/databases/prisma.database";



@Injectable()
export class CreateTodoRespository {
    constructor(private readonly prisma: PrismaService) {}


    async create(data : CreateTodoDto) {
        return await this.prisma.todo.create({ data });
    }
}