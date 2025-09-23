import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { Course } from './entity/course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'School',
      entities: [Course],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Course]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
