import { Module } from '@nestjs/common';
import { CoursesController } from './app.controller';
import { CoursesService } from './app.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class AppModule {}
