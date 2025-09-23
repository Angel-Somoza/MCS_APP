import { Controller, Get, Post, Put, Delete, Param, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Controller()
export class AppController {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersClient: ClientProxy,
    @Inject('COURSES_SERVICE') private readonly coursesClient: ClientProxy,
    @Inject('PRODUCTS_SERVICE') private readonly productsClient: ClientProxy,
    @Inject('ESTUDIANTES_SERVICE') private readonly estudiantesClient: ClientProxy,
    
  ) {}

  @Get('user')
  getUsers() {
    return this.usersClient.send({ cmd: 'get_users' }, {});
  }

  @Get('courses')
  getCourses() {
    return this.coursesClient.send({ cmd: 'get_courses' }, {});
  }

  @Get('products')
  getProducts() {
    return this.productsClient.send({ cmd: 'get_products' }, {});

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
