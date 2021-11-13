import { Get, Controller, Render, Post, Body } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private appService: AppService) {}

  // index(main)
  @Get()
  @Render('index')
  goIndex() {
    return { message: 'index!' };
  }

  @Get('/index')
  @Render('index')
  goIndex1() {
    return { message: 'index!' };
  }

  // threeMeals
  @Get('/threeMeals')
  @Render('threeMeals')
  gothreeMeals() {
    return { message: 'threeMeals!' };
  }
}
