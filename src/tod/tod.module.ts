import { Logger, Module } from '@nestjs/common';
import { TodService } from './tod.service';
import { TodController } from './tod.controller';
import { PrismaService } from 'src/shared/databases/prisma.database';
import * as UseCases from './use-cases';
import * as Repositories from './repository';


const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  controllers: [TodController],
  providers: [TodService,
    PrismaService,
    Logger,
    ...repositories,
    ...useCases,
    
  ],
})
export class TodModule {}


