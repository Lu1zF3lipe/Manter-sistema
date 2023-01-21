import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  IsEmail,
  IsUrl,
} from 'class-validator';

export class createSystemDTO {
  @IsString()
  @IsEmail()
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
  @ApiProperty({
    description: 'Sigla do sistema para pesquisa.',
    example: 'FGHP',
    type: String,
  })
  acronym: string;

  @IsString()
  @MaxLength(100)
  @ApiProperty({
    description: 'Descriçao do sistema para pesquisa',
    example: 'sistema de login de usuario',
    type: String,
  })
  descrition: string;

  @IsString()
  @IsUrl()
  @MaxLength(50)
  @IsOptional()
  @ApiProperty({
    description: 'URL de acesso ao sistema.',
    example: 'sistema-login.com.br',
    type: String,
  })
  url?: string;
}
