import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'scw314210@#',
  database: 'food_app',
  entities: [User], // 직접 지정
  synchronize: false,
  // entities: [__dirname + '/../**/*.entitiy.{js,ts}'], 자동 탐색
};
