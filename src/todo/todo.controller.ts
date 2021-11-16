import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Redirect,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';

@Controller('/')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get('/')
  @Render('index')
  goIndex() {}

  @Get('/index')
  @Render('index')
  goIndex1() {}

  @Post('/index.do')
  @Redirect('http://localhost:3000/index', 302)
  create(@Body() createTodoDto: CreateTodoDto): Promise<void> {
    return this.todoService.create(createTodoDto);
  }

  @Get('getTodo')
  @Render('index')
  async findAll(): Promise<Todo[]> {
    const getList = await this.todoService.findAll();
    console.log(getList);
    return getList;
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {6
  //   return this.todoService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
  //   return this.todoService.update(+id, updateTodoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.todoService.remove(+id);
  // }
}
