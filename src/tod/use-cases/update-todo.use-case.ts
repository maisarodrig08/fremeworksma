


import { Injectable,Logger, NotFoundException } from "@nestjs/common";
import { UpdateTodoRespository, FindTodoByIdRepository } from "../repository";

@Injectable()
export class DeleteTodoUseCase{
    constructor(
        private readonly deleteTodoRepository: UpdateTodoRespository,
        private readonly findTodoByIdRepository: FindTodoByIdRepository,
        private readonly logger: Logger,
    ){}
   
      async execute (id: string){
try{
        this.logger.log('Updating toDo...');

        const todo = await this.findTodoByIdRepository.findById(id);

        if (!todo){
            throw new NotFoundException('ToDo not found');
        }

        await this .deleteTodoRepository.execute(id);
        this.logger.log('ToDo Update sucessfully!')
        return todo;
       }catch (error) {
        this.logger.error(error);
        throw error;

       }
    
        }

           }

