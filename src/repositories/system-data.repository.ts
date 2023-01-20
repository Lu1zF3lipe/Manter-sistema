import { PrismaService } from 'src/db';
import { createSystemDTO } from 'src/system/dto/create-system.dto';
import { SystemData } from 'src/system/system-data.models';
import { findFilterSystemDTO } from 'src/system/dto/find-filter-system.dto';
import { plainToInstance } from 'class-transformer';
import { updateSystemDTO } from 'src/system/dto/uptade-system.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SystemDataRepository {
  constructor(private prisma: PrismaService) {}

  async create({
    email,
    acronym,
    url,
    descrition,
  }: createSystemDTO): Promise<SystemData> {
    const createdSystem = await this.prisma.systemData.create({
      data: {
        email,
        acronym,
        url,
        descrition,
      },
    });

    return plainToInstance(SystemData, createdSystem);
  }

  async find({
    email,
    acronym,
    descrition,
    per_page,
    page,
  }: findFilterSystemDTO): Promise<SystemData[]> {
    const system = await this.prisma.systemData.findMany({
      where: {
        AND: [
          {
            email: {
              contains: email,
            },
          },
          {
            acronym: {
              contains: acronym,
            },
          },
          {
            descrition: {
              contains: descrition,
            },
          },
        ],
      },
      take: per_page,
      skip: (page - 1) * per_page,
    });

    return plainToInstance(SystemData, system);
  }

  async update(
    id: number,
    {
      email,
      acronym,
      descrition,
      url,
      editor_name,
      justification,
      status,
    }: updateSystemDTO,
  ): Promise<SystemData> {
    const updatedSystem = await this.prisma.systemData.update({
      data: {
        email,
        acronym,
        descrition,
        url,
        system_controls: {
          create: [
            {
              editor_name,
              justification,
              status,
            },
          ],
        },
      },
      include: {
        system_controls: {
          take: 1,
          orderBy: {
            crated_at: 'desc',
          },
        },
      },
      where: { id },
    });
    return plainToInstance(SystemData, updatedSystem);
  }

  async findOne(id: number): Promise<SystemData> {
    const findOne = await this.prisma.systemData.findUnique({
      include: {
        system_controls: {
          take: 1,
          orderBy: {
            crated_at: 'desc',
          },
        },
      },
      where: { id },
    });

    return findOne;
  }

  async findByEmail(email: string): Promise<SystemData> {
    const findByEmail = await this.prisma.systemData.findUnique({
      where: { email },
    });

    return findByEmail;
  }
}
