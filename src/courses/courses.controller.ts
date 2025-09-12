import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './entity/course.entity';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Course |null> {
    return this.coursesService.findOne(+id);
  }

  @Post()
  create(@Body() course: Partial<Course>): Promise<Course> {
    return this.coursesService.create(course);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() course: Partial<Course>): Promise<Course | null> {
    return this.coursesService.update(+id, course);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.coursesService.remove(+id);
  }
}
