import {
  Controller,
  Get,
  Post,
  Body,
  Redirect,
  Render,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('/')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // CREATE
  /*
   * 1. localhost:3000/ 으로 이동
   * 2. 생성하는 부분 CreateTodoDto의 모든 정보를 불러옴
   * 3. service단으로 넘긴다.
   */
  @Post('/index.do') // Post
  @Redirect('/') // 1
  create(@Body() createTodoDto: CreateTodoDto): Promise<any> {
    // 2
    return this.todoService.create(createTodoDto); // 3
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

  @Get('deleteTodo')
  @Redirect('/')
  deleteTodo(@Query('id') id): Promise<void> {
    return this.todoService.deleteTodo(id);
  }

  @Get('statusTodo')
  @Redirect('/')
  todoStatus(
    @Query('id') todoId: number,
    @Query('status') status: string,
  ): Promise<any> {
    return this.todoService.todoStatus(todoId, status);
  }
}
