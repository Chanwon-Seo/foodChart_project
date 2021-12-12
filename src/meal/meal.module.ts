import { Module } from '@nestjs/common';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';
import { mealRepository } from './meal.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([mealRepository])],
  controllers: [MealController],
  providers: [MealService],
})
export class MealModule {}
