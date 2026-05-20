import { Injectable } from "@nestjs/common";
import { RegisterUseCases } from "./use-cases/register.use-case";
import { LoginUseCases } from "./use-cases/login.use-case";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly registerUseCase: RegisterUseCases,
        private readonly loginUseCase: LoginUseCases,
    ) {}

    async register(data: RegisterDto) {
        return await this.registerUseCase.execute(data);

    }

    async login(data: LoginDto) {
        return await this.loginUseCase.execute(data);  
    }
}
 