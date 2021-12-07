import { IsString } from 'class-validator';

export class CreateHedgehogDto {
  @IsString()
  good: string;

  @IsString()
  bad: string;

  @IsString()
  improvements: string;

  @IsString()
  chosen_improvement: string;
}
