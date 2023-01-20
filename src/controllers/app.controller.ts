import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}