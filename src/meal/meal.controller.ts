import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Redirect,
  Render,
} from '@nestjs/common';
import { MealService } from './meal.service';
import { CreateMealDto } from './dto/create-meal.dto';

@Controller('/meal')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  // Create
  @Post('/meal.do')
  @Redirect('/meal')
  create(@Body() createMealDto: CreateMealDto): Promise<any> {
    return this.mealService.create(createMealDto);
  }

  @Get()
  @Render('meal')
  async getList() {
    return { data: await this.mealService.findAll() };
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMealDto: UpdateMealDto) {
  //   return this.mealService.update(+id, updateMealDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.mealService.remove(+id);
  // }
}
