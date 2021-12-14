import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Meal } from 'src/meal/entities/meal.entity';
import { Todo } from 'src/todo/entities/todo.entity';
import { User } from 'src/user/entities/user.entity';
import { Weight } from 'src/weight/entities/weight.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'scw31421@#',
  database: 'food_app',
  entities: [User, Todo, Meal, Weight], // 직접 지정
  synchronize: false,
  // entities: [__dirname + '/../**/*.entitiy.{js,ts}'], 자동 탐색
};
