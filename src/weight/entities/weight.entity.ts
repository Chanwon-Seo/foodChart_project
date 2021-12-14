import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Weight')
export class Weight extends BaseEntity {
  @PrimaryGeneratedColumn()
  weight_Id: number;

  @Column('date')
  date: Date;

  @Column({ default: 40 })
  weight_Data: number;
}
