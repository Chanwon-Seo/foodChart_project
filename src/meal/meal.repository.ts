import { EntityRepository, Repository } from 'typeorm';
import { Meal } from './entities/meal.entity';

@EntityRepository(Meal)
export class MealRepository extends Repository<Meal> {}
