import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { EstudiantesService } from './app.service';

@Controller()
export class EstudiantesController {   // 👈 NOMBRE CORRECTO
  constructor(private readonly estudiantesService: EstudiantesService) {}

  // Para Gateway (TCP)
  @MessagePattern({ cmd: 'get_estudiantes' })
  async getEstudiantesRPC() {
    return this.estudiantesService.findAll();
  }

  // Para pruebas directas (HTTP)
  @Get('estudiantes')
  async getEstudiantesHttp() {
    return this.estudiantesService.findAll();
  }
}
