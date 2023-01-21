import { Module } from '@nestjs/common';
import { SystemController } from './system/controllers/system.controller';
import { SystemService } from './domain/services/system.service';
import { SystemDataRepository } from './infrastructure/repositories/system-data.repository';
import { prismaModule } from './infrastructure/database/prisma.module';

@Module({
  imports: [prismaModule],
  controllers: [SystemController],
  providers: [SystemService, SystemDataRepository],
})
export class AppModule {}
