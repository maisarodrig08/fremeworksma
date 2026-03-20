import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateTodoDto } from "../dto/update-tod.dto";



@Injectable()
export class UpdateTodoRespository {
    constructor(private readonly prisma: PrismaService) { }


    async update (data: UpdateTodoDto, id: string)
{
        return await this.prisma.todo.update({
            where: { id }, data
        });
    }
}