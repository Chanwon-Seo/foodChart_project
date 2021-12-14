import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMealDto {
  @IsNotEmpty()
  mealId: number;

  @IsNotEmpty()
  @IsString()
  imgPath: string;

  @IsNotEmpty()
  waterNum: number;

  @IsString()
  textData: string;
}
