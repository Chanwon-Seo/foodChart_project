import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeORMConfig } from './configs/typeorm.config';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UserModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
