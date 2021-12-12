import { EntityRepository, Repository } from 'typeorm';
import { Meal } from './entities/meal.entity';

@EntityRepository(Meal)
export class mealRepository extends Repository<Meal> {}
