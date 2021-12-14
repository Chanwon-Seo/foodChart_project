import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeORMConfig } from './configs/typeorm.config';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { MealModule } from './meal/meal.module';
import { WeightModule } from './weight/weight.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    UserModule,
    TodoModule,
    MealModule,
    WeightModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', '/', 'views'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
