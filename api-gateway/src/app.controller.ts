import { Controller, Get, Post, Put, Delete, Param, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('COURSES_SERVICE') private readonly coursesClient: ClientProxy,
  ) {}
  
//Courses
@Get('courses')
  getCourses() {
    return this.coursesClient.send({ cmd: 'get_courses' }, {});
  }

  @Get('courses/:id')
  getCourse(@Param('id') id: string) {
    return this.coursesClient.send({ cmd: 'get_course' }, +id);
  }

  @Post('courses')
  createCourse(@Body() course: any) {
    return this.coursesClient.send({ cmd: 'create_course' }, course);
  }

  @Put('courses/:id')
  updateCourse(@Param('id') id: string, @Body() course: any) {
    return this.coursesClient.send({ cmd: 'update_course' }, { id: +id, course });
  }

  @Delete('courses/:id')
  deleteCourse(@Param('id') id: string) {
    return this.coursesClient.send({ cmd: 'delete_course' }, +id);
  }


}
