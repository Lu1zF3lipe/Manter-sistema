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
  email?: string;

  @IsString()
  @MaxLength(10)
  @IsOptional()
  acronym?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  descrition?: string;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  @Max(20)
  per_page = 5;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  page = 1;
}
