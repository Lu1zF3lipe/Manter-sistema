import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SystemDataRepository } from 'src/infrastructure/repositories/system-data.repository';
import { createSystemDTO } from 'src/system/dto/create-system.dto';
import { findFilterSystemDTO } from 'src/system/dto/find-filter-system.dto';
import { updateSystemDTO } from 'src/system/dto/uptade-system.dto';

@Injectable()
export class SystemService {
  constructor(private readonly systemDataRepository: SystemDataRepository) {}

  public async create(create: createSystemDTO) {
    if (
      create.email &&
      (await this.systemDataRepository.findByEmail(create.email))
    ) {
      throw new HttpException('E-mail inválido.', HttpStatus.BAD_REQUEST);
    }

    const system = await this.systemDataRepository.create(create);
    return system;
  }

  public async findFilter(findFiltedSystem: findFilterSystemDTO) {
    const filtedSystem = await this.systemDataRepository.find(findFiltedSystem);
    if (filtedSystem.length === 0) {
      throw new HttpException(
        'Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa!',
        HttpStatus.NOT_FOUND,
      );
    }
    return filtedSystem;
  }

  public async update(id: number, updateSystem: updateSystemDTO) {
    if (updateSystem.email) {
      const systemExists = await this.systemDataRepository.findByEmail(
        updateSystem.email,
      );
      if (systemExists && systemExists.id !== id) {
        throw new HttpException('E-mail inválido.', HttpStatus.BAD_REQUEST);
      }
    }

    const updatedSystem = await this.systemDataRepository.update(
      id,
      updateSystem,
    );
    return updatedSystem;
  }

  public async findOne(id: number) {
    const findOne = await this.systemDataRepository.findOne(id);
    if (!findOne) {
      throw new HttpException(
        'Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa!',
        HttpStatus.NOT_FOUND,
      );
    }
    return findOne;
  }
}
