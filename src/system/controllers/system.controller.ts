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
import {
  ApiTags,
  ApiBody,
  ApiQuery,
  ApiCreatedResponse,
  ApiResponse,
} from '@nestjs/swagger';
import { SystemService } from 'src/domain/services/system.service';
import { createSystemDTO } from 'src/system/dto/create-system.dto';
import { findFilterSystemDTO } from 'src/system/dto/find-filter-system.dto';
import { updateSystemDTO } from 'src/system/dto/uptade-system.dto';
import { SystemData } from 'src/infrastructure/system-data.models';

@ApiTags('system')
@Controller('system')
export class SystemController {
  constructor(private readonly SystemService: SystemService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Operação realizada com sucesso.',
    type: createSystemDTO,
  })
  @ApiResponse({
    status: 400,
    description:
      'E-mail inválido e Dados obrigatorios não informados ou invalidos',
  })
  @ApiBody({ type: createSystemDTO })
  async create(@Body() createSystemDTO: createSystemDTO) {
    await this.SystemService.create(createSystemDTO);
    return {
      statusCode: 201,
      message: 'Operação realizada com sucesso.',
    };
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'registro encontrado',
    type: SystemData,
  })
  @ApiResponse({
    status: 404,
    description:
      'Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa!',
  })
  async findFilted(@Query() findFilterSystem: findFilterSystemDTO) {
    const System = await this.SystemService.findFilter(findFilterSystem);
    return System;
  }

  @Patch('/:system_id')
  @ApiResponse({
    status: 200,
    description: 'Operação realizada com sucesso.',
    type: updateSystemDTO,
  })
  @ApiResponse({
    status: 400,
    description:
      'E-mail inválido e Dados obrigatorios não informados ou invalidos',
  })
  @ApiBody({ type: updateSystemDTO })
  async update(
    @Param('system_id', new ParseIntPipe()) id: number,
    @Body() updateSystem: updateSystemDTO,
  ) {
    await this.SystemService.update(id, updateSystem);
    return {
      statusCode: 200,
      message: 'Operação realizada com sucesso.',
    };
  }

  @Get('/:system_id')
  @ApiResponse({
    status: 200,
    description: 'registro encontrado',
    type: SystemData,
  })
  @ApiResponse({
    status: 404,
    description:
      'Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa!',
  })
  async findOne(@Param('system_id', new ParseIntPipe()) id: number) {
    const System = await this.SystemService.findOne(id);
    return System;
  }
}
