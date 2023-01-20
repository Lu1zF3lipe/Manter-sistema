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
  email?: string;

  @IsString()
  @MaxLength(10)
  acronym: string;

  @IsString()
  @MaxLength(100)
  descrition: string;

  @IsString()
  @IsUrl()
  @MaxLength(50)
  @IsOptional()
  url?: string;
}
