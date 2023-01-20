/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Query,
  Param,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { SystemService } from 'src/services/system.service';
import { createSystemDTO } from 'src/system/dto/create-system.dto';
import { findFilterSystemDTO } from 'src/system/dto/find-filter-system.dto';
import { updateSystemDTO } from 'src/system/dto/uptade-system.dto';

@Controller('system')
export class SystemController {
  constructor(private readonly SystemService: SystemService) {}

  @Post()
  async create(@Body() createSystemDTO: createSystemDTO) {
    await this.SystemService.create(createSystemDTO);
    return {
      statusCode: 201,
      message: 'Operação realizada com sucesso.',
    };
  }

  @Get()
  async findFilted(@Query() findFilterSystem: findFilterSystemDTO) {
    const System = await this.SystemService.findFilter(findFilterSystem);
    return System;
  }

  @Patch('/:system_id')
  async update(
    @Param('system_id', new ParseIntPipe()) id: number,
    @Body() updateSystem: updateSystemDTO,
  ) {
    await this.SystemService.update(id, updateSystem);
    return {
      statusCode: 201,
      message: 'Operação realizada com sucesso.',
    };
  }

  @Get('/:system_id')
  async findOne(@Param('system_id', new ParseIntPipe()) id: number) {
    const System = await this.SystemService.findOne(id);
    return System;
  }
}
