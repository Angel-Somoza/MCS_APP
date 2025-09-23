
import { Controller, Get, Post, Put, Delete, Inject, Body, Param  } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Controller()
export class AppController {
  constructor(
    @Inject('COURSES_SERVICE') private readonly coursesClient: ClientProxy,
    @Inject('PROFESORES_SERVICE') private readonly profesoresCliente: ClientProxy,
    @Inject('ESTUDIANTES_SERVICE') private readonly estudiantesClient: ClientProxy,
    

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

  @Get('profesores')
  getProfesores() {
    return this.profesoresCliente.send({ cmd: 'get_profesores' }, {});
  }

  @Post('profesores')
  createProfesor(@Body() data: any) {
    return this.profesoresCliente.send({ cmd: 'create_profesor' }, data);
  }

  @Put('profesores/:id')
  updateProfesor(@Param('id') id: string, @Body() data: any) {
    return this.profesoresCliente.send({ cmd: 'update_profesor' }, { id, update: data });
  }

  @Delete('profesores/:id')
  deleteProfesor(@Param('id') id: string) {
    return this.profesoresCliente.send({ cmd: 'delete_profesor' }, id);
  }
  
  //estudiantes
    @Get('estudiantes')
  getEstudiantes() {
    return this.estudiantesClient.send({ cmd: 'get_estudiantes' }, {});
  }

  @Get('estudiantes/:id')
  getEstudiante(@Param('id') id: string) {
    return this.estudiantesClient.send({ cmd: 'get_estudiante' }, +id);
  }

  @Post('estudiantes')
  createEstudiante(@Body() data: any) {
    return this.estudiantesClient.send({ cmd: 'create_estudiante' }, data);
  }

  @Put('estudiantes/:id')
  updateEstudiante(@Param('id') id: string, @Body() data: any) {
    return this.estudiantesClient.send({ cmd: 'update_estudiante' }, { id: +id, estudiante: data });
  }

  @Delete('estudiantes/:id')
  deleteEstudiante(@Param('id') id: string) {
    return this.estudiantesClient.send({ cmd: 'delete_estudiante' }, +id);

  }

}
