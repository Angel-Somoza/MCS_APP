import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Course } from './entity/course.entity';

@Controller()
export class CoursesController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get_courses' })
  findAll(): Promise<Course[]> {
    return this.appService.findAll();
  }

  @MessagePattern({ cmd: 'get_course' })
  findOne(id: number): Promise<Course | null> {
    return this.appService.findOne(id);
  }

  @MessagePattern({ cmd: 'create_course' })
  create(course: Partial<Course>): Promise<Course> {
    return this.appService.create(course);
  }

  @MessagePattern({ cmd: 'update_course' })
  update(data: { id: number; course: Partial<Course> }) {
    return this.appService.update(data.id, data.course);
  }

  @MessagePattern({ cmd: 'delete_course' })
  remove(id: number) {
    return this.appService.remove(id);
  }
}




