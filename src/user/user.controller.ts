import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/login')
  @Render('login')
  loginGo() {}

  @Post('/reg.do')
  create(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.userService.create(createUserDto);
  }

  // @Get('/reg.do')
  // @Render('login')
  // logina() {}

  // @Post('/signIn')
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get()
  // findAlltest(): Promise<User[]> {
  //   return this.userService.findAlltest();
  // }

  // @Get(':id')
  // findOnetest(@Param('id') id: string): Promise<User> {
  //   return this.userService.findOnetest(id);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
