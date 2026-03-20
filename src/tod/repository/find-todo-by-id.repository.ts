import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-tod.dto";
import { PrismaService } from "src/shared/databases/prisma.database";



@Injectable()
export class FindAllTodoRespository {
    findAll() {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly prisma: PrismaService) {}


    async execute (id:string) {
        return await this.prisma.todo.findUnique({
            where: {id},
        });
    }
}