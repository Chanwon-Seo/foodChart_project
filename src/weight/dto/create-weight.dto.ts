import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateWeightDto {
  weight_Id: number;

  @IsDate()
  date: Date;

  @IsNotEmpty()
  weight_Data: number;
}
