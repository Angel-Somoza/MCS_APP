import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Profesor } from './schemas/profesor.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get_profesores' })
  async getProfesores(): Promise<Profesor[]> {
    return this.appService.findAll();
  }

  @MessagePattern({ cmd: 'create_profesor' })
  async createProfesor(@Payload() data: Partial<Profesor>) {
    if (!data.nombre) throw new Error('El nombre del profesor es obligatorio');
    return this.appService.create(data); 
    // ✅ Llamas al service, no al modelo
  }

  @MessagePattern({ cmd: 'update_profesor' })
  async updateProfesor(@Payload() data: { id: string; update: Partial<Profesor> }) {
    return this.appService.update(data.id, data.update);
  }

  @MessagePattern({ cmd: 'delete_profesor' })
  async deleteProfesor(@Payload() id: string) {
    return this.appService.delete(id);
  }
}


