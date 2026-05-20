import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { createParam } from "@prisma/client/runtime/client";

export const CurrentUser = createParamDecorator(
(_data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
},
    
);