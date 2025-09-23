import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
  findAll() {
    return [
      { name: 'microservicios de Cursos  ' }
    ];
  }
}
