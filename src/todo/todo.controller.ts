import {
  Controller,
  Get,
  Post,
  Body,
  Redirect,
  Render,
  Res,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('/')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('/index.do')
  @Redirect('http://localhost:3000/', 302)
  create(@Body() createTodoDto: CreateTodoDto): Promise<void> {
    return this.todoService.create(createTodoDto);
  }

  // 만드셔용
  @Get('/index')
  @Render('index')
  root() {
    return `goindex`;
  }

  @Get()
  @Render('index')
  async getList() {
    const getList = await this.todoService.findAll();
    // forEach없이도 가능 넘길 때 배열에 담아 넘김
    // const dataArr = [];
    // getList.forEach((data) => {
    //   dataArr.push(data);
    // });
    // console.log(dataArr);
    return { data: getList };
  }

  // @Get('/getTodo')
  // @Render()
  // root(@Res() res: Response){
  //  return res.render(
  //    this.todoService.findAll(),
  //    {message : "hello world!"},
  //  )
}

// @Get('getTodo')
// @Render('index')
// async findAll(): Promise<Todo[]> {
//   const getList = await this.todoService.findAll();
//   console.log(getList);
//   return Object.assign({
//     data: getList,
//   });
// }

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
// }
