import { IsOptional, IsString } from 'class-validator';

export class CreateHedgehogDto {
  @IsOptional()
  @IsString()
  good: string;

  @IsOptional()
  @IsString()
  bad: string;

  @IsOptional()
  @IsString()
  improvements: string;

  @IsOptional()
  @IsString()
  chosen_improvement: string;
}
