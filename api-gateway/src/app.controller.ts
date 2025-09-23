import { Controller, Get, Post, Put, Delete, Inject, Body, Param  } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersClient: ClientProxy,
    @Inject('COURSES_SERVICE') private readonly coursesClient: ClientProxy,
    @Inject('PRODUCTS_SERVICE') private readonly productsClient: ClientProxy,
    @Inject('PROFESORES_SERVICE') private readonly profesoresCliente: ClientProxy,
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

}
