import { Module } from '@nestjs/common';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';
import { MealRepository } from './meal.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MealRepository])],
  controllers: [MealController],
  providers: [MealService],
})
export class MealModule {}
