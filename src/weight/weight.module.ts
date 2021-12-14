import { Module } from '@nestjs/common';
import { WeightService } from './weight.service';
import { WeightController } from './weight.controller';
import { WeightRePository } from './weight.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WeightRePository])],
  controllers: [WeightController],
  providers: [WeightService],
})
export class WeightModule {}
