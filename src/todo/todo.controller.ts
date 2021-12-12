import {
  Controller,
  Get,
  Post,
  Body,
  Redirect,
  Render,
  Query,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import path from 'path/posix';
import { Todo } from './entities/todo.entity';

@Controller('/')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // CREATE
  @Post('/index.do')
  @Redirect('/')
  create(@Body() createTodoDto: CreateTodoDto): Promise<any> {
    return this.todoService.create(createTodoDto);
  }

  // AllRead
  @Get()
  @Render('index')
  async getList() {
    return { data: await this.todoService.findAll() };
  }

  @Get('updateUpTodo')
  @Redirect('/')
  updateUpTodo(
    @Query('id') todoId: number,
    @Query('count', ParseIntPipe) count: number,
  ): Promise<void> {
    return this.todoService.updateUpTodo(todoId, count);
  }

  @Get('updateDownTodo')
  @Redirect('/')
  updateDownTodo(
    @Query('id') todoId: number,
    @Query('count', ParseIntPipe) count: number,
  ): Promise<void> {
    return this.todoService.updateDownTodo(todoId, count);
  }

  @Get('statusTodo')
  @Redirect('/')
  statusTodo(@Query('id') todoId: number, @Body() status: Todo): Promise<void> {
    return this.todoService.statusTodo(todoId, status);
  }

  @Get('deleteTodo')
  @Redirect('/')
  deleteTodo(@Query('id') id): Promise<void> {
    console.log(id);
    return this.todoService.deleteTodo(id);
  }
}
