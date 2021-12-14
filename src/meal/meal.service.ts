import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { Meal } from './entities/meal.entity';
import { MealRepository } from './meal.repository';

@Injectable()
export class MealService {
  constructor(
    @InjectRepository(MealRepository)
    private mealRepository: MealRepository,
  ) {}

  // create
  async create(createMealDto: CreateMealDto): Promise<any> {
    await this.mealRepository.save(createMealDto);
    // return `save`;
  }

  // AllRead
  async findAll(): Promise<Meal[]> {
    return await this.mealRepository.find();
  }

  async findOne(id: number): Promise<any> {
    const found = await this.mealRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Can't find Meal with id ${id}`);
    }
    return found;
  }

  update(id: number, updateMealDto: UpdateMealDto) {
    return `This action updates a #${id} meal`;
  }

  remove(id: number) {
    return `This action removes a #${id} meal`;
  }
}
