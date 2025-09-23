import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entity/course.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepo: Repository<Course>,
  ) {}

  findAll() {
    return this.courseRepo.find();
  }

  findOne(id: number) {
    return this.courseRepo.findOneBy({ id_curso: id });
  }

  create(course: Partial<Course>) {
    const newCourse = this.courseRepo.create(course);
    return this.courseRepo.save(newCourse);
  }

  async update(id: number, course: Partial<Course>) {
    await this.courseRepo.update(id, course);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.courseRepo.delete(id);
  }
}
