import { Controller, Post, Body, Redirect } from '@nestjs/common';
import { WeightService } from './weight.service';
import { CreateWeightDto } from './dto/create-weight.dto';

@Controller('weight')
export class WeightController {
  constructor(private readonly weightService: WeightService) {}

  @Post('/weight.do') // Post
  @Redirect('/welght1.html')
  create(@Body() createWeightDto: CreateWeightDto): Promise<any> {
    return this.weightService.create(createWeightDto);
  }
}
