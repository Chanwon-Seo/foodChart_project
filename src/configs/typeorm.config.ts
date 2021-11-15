import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from 'src/todo/entities/todo.entity';
import { User } from 'src/user/entities/user.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'scw31421@#',
  database: 'food_app',
  entities: [User, Todo], // 직접 지정
  synchronize: false,
  // entities: [__dirname + '/../**/*.entitiy.{js,ts}'], 자동 탐색
};
