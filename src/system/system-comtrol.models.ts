import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsString, MaxLength, IsIn, IsNumber, IsDate } from 'class-validator';

export class SystemComtrol {
  @IsNumber()
  @Exclude()
  id: number;

  @Exclude()
  system_data_id: number;

  @IsString()
  @IsIn(['Ativo', 'Cancelado'])
  @ApiProperty({
    description: 'status do sistema.',
    examples: ['ativado', 'desativado'],
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

  @IsDate()
  crated_at: Date;
}
