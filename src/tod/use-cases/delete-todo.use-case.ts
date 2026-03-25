import { Injectable,Logger, NotFoundException } from "@nestjs/common";
import { DeleteTodoRespository, FindTodoByIdRepository } from "../repository";

@Injectable()
export class DeleteTodoUseCase{
    constructor(
        private readonly deleteTodoRepository: DeleteTodoRespository,
        private readonly findTodoByIdRepository: FindTodoByIdRepository,
        private readonly logger: Logger,
    ){}
   
      async delete (id: string){
try{
        this.logger.log('Deleting toDo...');

        const todo = await this.findTodoByIdRepository.findById(id);

        if (!todo){
            throw new NotFoundException('ToDo not found');
        }

        await this .deleteTodoRepository.delete(id);
        this.logger.log('ToDo deleted sucessfully!')
        return todo;
       }catch (error) {
        this.logger.error(error);
        throw error;

       }
    
        }

           }

