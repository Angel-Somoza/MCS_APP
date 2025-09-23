import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { EstudiantesService } from './app.service';
import { Estudiante } from './entity/estudiante.entity'

@Controller()
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @MessagePattern({ cmd: 'get_estudiantes' })
  findAll(): Promise<Estudiante[]> {
    return this.estudiantesService.findAll();
  }

  @MessagePattern({ cmd: 'get_estudiante' })
  findOne(id: number): Promise<Estudiante | null> {
    return this.estudiantesService.findOne(id);
  }

  @MessagePattern({ cmd: 'create_estudiante' })
  create(estudiante: Partial<Estudiante>): Promise<Estudiante> {
    return this.estudiantesService.create(estudiante);
  }

  @MessagePattern({ cmd: 'update_estudiante' })
  update(data: { id: number; estudiante: Partial<Estudiante> }) {
    return this.estudiantesService.update(data.id, data.estudiante);
  }

  @MessagePattern({ cmd: 'delete_estudiante' })
  remove(id: number) {
    return this.estudiantesService.remove(id);
  }
}
