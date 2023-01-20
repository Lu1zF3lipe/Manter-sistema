import { Exclude } from 'class-transformer';
import { IsString, MaxLength, IsOptional, IsNumber } from 'class-validator';

export class SystemData {
  @IsNumber()
  @Exclude({ toPlainOnly: true })
  id: number;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  email?: string;

  @IsString()
  @MaxLength(10)
  @IsOptional()
  acronym: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  descrition: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  url?: string;
}
