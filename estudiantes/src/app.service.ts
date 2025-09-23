import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './entity/estudiante.entity';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudiantesRepository: Repository<Estudiante>,
  ) {}

  async findAll(): Promise<Estudiante[]> {
    return this.estudiantesRepository.find();
  }

  async findOne(id: number): Promise<Estudiante | null> {
    return this.estudiantesRepository.findOneBy({ id });
  }

  async create(estudiante: Partial<Estudiante>): Promise<Estudiante> {
    const newEstudiante = this.estudiantesRepository.create(estudiante);
    return this.estudiantesRepository.save(newEstudiante);
  }

  async update(id: number, estudiante: Partial<Estudiante>): Promise<Estudiante> {
    await this.estudiantesRepository.update(id, estudiante);
    return this.findOne(id) as Promise<Estudiante>;
  }

  async remove(id: number): Promise<void> {
    await this.estudiantesRepository.delete(id);
  }
}
