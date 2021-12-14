import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BroadcasterResult } from 'typeorm/subscriber/BroadcasterResult';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';

import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoRepository)
    private todoRepository: TodoRepository,
  ) {}

  // create
  /*
   * 1. Controller에서 받은 CreateTodoDto를 선언하여 값을 받는다.
   * 2. 비동기식 async await 사용 해당 todoRepository를 이용해
   *    createtodoDto의 모든 정보를 저장한다.
   * 3. return으로 해당 문자열을 넘긴다.ㅇ
   */
  async create(createTodoDto: CreateTodoDto): Promise<any> {
    // 1
    await this.todoRepository.save(createTodoDto); // 2
    return `save`; // 3.
  }

  // AllRead
  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  // oneList find
  async findOne(id: number): Promise<any> {
    const found = await this.todoRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  // btnUp
  async updateUpTodo(todoId: number, count: number): Promise<any> {
    const up: number = count + 1;
    if (up > 20) {
      return -1;
    }
    await this.todoRepository.update(todoId, { count: up });
  }

  // btnDown
  async updateDownTodo(todoId: number, count: number): Promise<any> {
    const down: number = count - 1;
    if (down < 0) {
      return -1;
    }
    await this.todoRepository.update(todoId, { count: down });
  }

  async todoStatus(todoId: number, status: string): Promise<any> {
    let check: string = status;
    console.log(check);
    let test = 0;
    if (check === 'true') {
      test = 1;
    } else {
      test = 0;
    }
    console.log(test);
    await this.todoRepository.update(todoId, { status: test });
  }

  // list delete
  async deleteTodo(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
