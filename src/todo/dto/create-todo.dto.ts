import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  todoId: number;

  @IsNotEmpty()
  @IsString()
  listData: string;

  count: number;
}
