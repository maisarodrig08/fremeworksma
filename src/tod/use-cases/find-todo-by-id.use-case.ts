import { Injectable, Logger } from "@nestjs/common";
import { FindTodoByIdRepository } from "../repository";

@Injectable()
export class FindTodoByIdUseCase{
  findById(id: string) {
    throw new Error('Method not implemented.');
  }
    constructor(
        private readonly findTodoByIdRepository: FindTodoByIdRepository,
        private readonly logger: Logger
    ){}


async execute(id: string){
    try{
        this.logger.log("Fetching todo...");
        const todo = await this.findTodoByIdRepository.findById(id);
        this.logger.log("Todos fetched sucessfufly!");
        return todo;
       } catch (error){
        this.logger.error(error);
        throw new Error("Failed to fetch todos");
    
       }
    }
}