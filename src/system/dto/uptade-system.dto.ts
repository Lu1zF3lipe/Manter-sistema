import { IsString, MaxLength, IsOptional, IsIn } from 'class-validator';

export class updateSystemDTO {
  @IsString()
  @MaxLength(100)
  @IsOptional()
  email?: string;

  @IsString()
  @MaxLength(10)
  acronym: string;

  @IsString()
  @MaxLength(100)
  descrition: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  url?: string;

  @IsString()
  @IsIn(['Ativo', 'Cancelado'])
  status: string;

  @IsString()
  @MaxLength(100)
  editor_name: string;

  @IsString()
  @MaxLength(500)
  justification: string;
}
