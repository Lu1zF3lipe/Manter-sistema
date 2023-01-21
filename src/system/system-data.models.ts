import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsString, MaxLength, IsOptional, IsNumber } from 'class-validator';

export class SystemData {
  @IsNumber()
  @Exclude({ toPlainOnly: true })
  id: number;

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
  acronym: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  @ApiProperty({
    description: 'Descriçao do sistema para pesquisa',
    example: 'sistema de login de usuario',
    type: String,
  })
  descrition: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  @ApiProperty({
    description: 'URL de acesso ao sistema.',
    example: 'sistema-login.com.br',
    type: String,
  })
  url?: string;
}
