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
  status: string;

  @IsString()
  @MaxLength(100)
  editor_name: string;

  @IsString()
  @MaxLength(500)
  justification: string;

  @IsDate()
  crated_at: Date;
}
