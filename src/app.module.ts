import { Module } from '@nestjs/common';
import { SystemController } from './controllers/system.controller';
import { SystemService } from './services/system.service';
import { PrismaService } from './db';
import { SystemDataRepository } from './repositories/system-data.repository';

@Module({
  imports: [],
  controllers: [SystemController],
  providers: [SystemService, PrismaService, SystemDataRepository],
})
export class AppModule {}
