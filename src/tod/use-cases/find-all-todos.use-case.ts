import { Injectable, Logger } from "@nestjs/common";
import { FindAllTodoRespository } from "../repository";

@Injectable()
export class FindAllUseCase{
    constructor(
        private readonly findAllTodosRepository: FindAllTodoRespository,
        private readonly logger: Logger
    ){}


async execute(){
    try{
        this.logger.log("Fetching all todos...");
        const todo = await this.findAllTodosRepository.findAll();
        this.logger.log("Todos fetched sucessfufly!");
        return todo;
       } catch (error){
        this.logger.error(error);
        throw new Error("Failed to fetch todos");
    
}
       
    }
}