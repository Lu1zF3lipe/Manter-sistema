import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, IsOptional, IsIn } from 'class-validator';

export class updateSystemDTO {
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
  @MaxLength(50)
  @IsOptional()
  @ApiProperty({
    description: 'URL de acesso ao sistema.',
    example: 'sistema-login.com.br',
    type: String,
  })
  url?: string;

  @IsString()
  @IsIn(['Ativo', 'Cancelado'])
  @ApiProperty({
    description: 'status do sistema.',
    example: 'Ativo',
    type: String,
  })
  status: string;

  @IsString()
  @MaxLength(100)
  @ApiProperty({
    description: 'Nome do usuário resonsável pela ultima alteração no sistema.',
    example: 'luiz felipe',
    type: String,
  })
  editor_name: string;

  @IsString()
  @MaxLength(500)
  @ApiProperty({
    description: 'justificativa para alteraçao do sistema.',
    example: 'alteraçao de URL do sistema.',
    type: String,
  })
  justification: string;
}
