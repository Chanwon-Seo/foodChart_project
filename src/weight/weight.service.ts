import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWeightDto } from './dto/create-weight.dto';

import { WeightRePository } from './weight.repository';

@Injectable()
export class WeightService {
  constructor(
    @InjectRepository(WeightRePository)
    private weightRespitory: WeightRePository,
  ) {}

  async create(createWeight: CreateWeightDto): Promise<any> {
    // 1
    await this.weightRespitory.save(createWeight);
    return `save`;
  }
}
