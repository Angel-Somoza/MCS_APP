import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersClient: ClientProxy,
    @Inject('COURSES_SERVICE') private readonly coursesClient: ClientProxy,
    @Inject('PRODUCTS_SERVICE') private readonly productsClient: ClientProxy,
    
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
}
