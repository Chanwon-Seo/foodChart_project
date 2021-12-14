import { EntityRepository, Repository } from 'typeorm';
import { Weight } from './entities/weight.entity';

@EntityRepository(Weight)
export class WeightRePository extends Repository<Weight> {}
