import { Injectable,Logger } from "@nestjs/common";

@Injectable()
export class DeleteTodoUseCase{
    findTodoByIdUseCase: any;
    constructor(
        private readonly deleteTodoRepository: DeleteTodoUseCase,
        private readonly logger: Logger
    ){}


async delete (id: string){
    try{
        this.logger.log("Deleting todo...");
        const todo = await this.deleteTodoRepository.delete(id);
        this.logger.log("Todo delete sucessfufly!");
        return todo;
       } catch (error){
        this.logger.error(error);
        throw new Error("Failed to delete todo");
    
       }

}
}