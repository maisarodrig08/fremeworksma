import { Injectable } from "@nestjs/common";
import { CreateTodDto } from "../dto/create-tod.dto";
import { PrismaService } from "src/shared/databases/prisma.database";



@Injectable()
export class FindAllTodoRespository {
    constructor(private readonly prisma: PrismaService) {}


    async execute (id:string) {
        return await this.prisma.todo.findUnique({
            where: {id},
        });
    }
}