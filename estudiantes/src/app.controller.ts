import { Controller, Get, Param } from '@nestjs/common';
import { EstudiantesService } from './app.service';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Get()
  async getAll() {
    return await this.estudiantesService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.estudiantesService.findOne(Number(id));
  }
}
