import { Get, Controller, Render } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private appService: AppService) {}

  // threeMeals
  @Get('/threeMeals')
  @Render('threeMeals')
  gothreeMeals() {
    return { message: 'threeMeals!' };
  }
}
