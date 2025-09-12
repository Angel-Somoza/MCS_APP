import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CoursesModule } from './courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './courses/entity/course.entity';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/usersdb'),
    UsersModule,
    ProductsModule,
    TypeOrmModule.forRoot({
          type: 'postgres', 
          port: 5432,
          username: 'postgres',
          password: '1234',
          database: 'School',
          entities: [Course], 
          synchronize: true, 
        }),
    CoursesModule

  ],
})
export class AppModule {}
