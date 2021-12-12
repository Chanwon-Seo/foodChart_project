import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoRepository)
    private todoRepository: TodoRepository,
  ) {}

  async getTodoById(id: number): Promise<Todo> {
    const found = await this.todoRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Can't find todo With id ${id}`);
    }
    return found;
  }
  // create
  async create(createTodoDto: CreateTodoDto): Promise<any> {
    await this.todoRepository.save(createTodoDto);
    return `save`;
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

  // status update
  async statusTodo(todoId: number, status: Todo): Promise<void> {
    await this.todoRepository.update(todoId, status);
  }

  // list delete
  async deleteTodo(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
