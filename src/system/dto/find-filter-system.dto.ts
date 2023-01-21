import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsString,
  MaxLength,
  IsOptional,
  Min,
  Max,
} from 'class-validator';

export class findFilterSystemDTO {
  @IsString()
  @MaxLength(100)
  @IsOptional()
  @ApiProperty({
    description: 'Email de atendimento do sistema.',
    example: 'luizfelipe123@gmail.com',
    type: String,
  })
  email?: string;

  @IsString()
  @MaxLength(10)
  @IsOptional()
  @ApiProperty({
    description: 'Sigla do sistema para pesquisa.',
    example: 'FGHP',
    type: String,
  })
  acronym?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  @ApiProperty({
    description: 'Descriçao do sistema para pesquisa',
    example: 'sistema de login de usuario',
    type: String,
  })
  descrition?: string;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  @Max(20)
  @ApiProperty({
    description: 'quantidade de registros por pagina retornados',
    example: 5,
    default: 5,
    type: Number,
  })
  per_page = 5;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  @ApiProperty({
    description: 'numero da pagina atual',
    example: 1,
    default: 1,
    type: Number,
  })
  page = 1;
}
