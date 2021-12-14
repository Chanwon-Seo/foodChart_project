import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Meal')
export class Meal extends BaseEntity {
  @PrimaryGeneratedColumn()
  mealId: number;

  @Column()
  imgPath: string;

  @Column()
  waterNum: number;

  @Column()
  textData: string;
}
