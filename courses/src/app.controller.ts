import { Controller, Get } from '@nestjs/common';
import { CoursesService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class CoursesController {
  constructor(private readonly appService: CoursesService) {}

  @MessagePattern({ cmd: 'get_courses' })
  getUsers() {
    return this.appService.findAll();
  }
}
