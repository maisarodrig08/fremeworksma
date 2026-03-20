import { Injectable, Logger } from "@nestjs/common";
import { UpdateTodoRespository } from "../repository";
import { UpdateTodoDto } from "../dto/update-tod.dto";


@Injectable()
export class UpdateTodoUseCase{
    constructor(
        private readonly updateTodoRepository: UpdateTodoRespository,
        private readonly logger: Logger

    ){}

    async update( data: UpdateTodoDto, id:string) {
        try {
            this.logger.log('Updating toDo...');
            const todo = await this.updateTodoRepository.update;
            this.logger.log('ToDo updated sucessfully');
            return todo;
        }catch (error) {
                this.logger.error(error);
                throw new Error ('Failed to update toDo');
            }
        }
    }