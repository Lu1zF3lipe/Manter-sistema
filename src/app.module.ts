import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { SystemController } from './controllers/system.controller';
import { SystemService } from './services/system.service';
import { PrismaService } from './db';
import { SystemDataRepository } from './repositories/system-data.repository';

@Module({
  imports: [],
  controllers: [AppController, SystemController],
  providers: [AppService, SystemService, PrismaService, SystemDataRepository],
})
export class AppModule {}
