import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Todo')
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  todoId: number;

  @Column()
  listData: string;

  @Column()
  count: number;
}
