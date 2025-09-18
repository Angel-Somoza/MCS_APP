import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Profesor } from "./profesor.entity";
import { ProfesorCurso } from "./profesor-curso.entity";
import { CreateProfesorDto } from "./dto/create-profesor.dto";
import { UpdateProfesorDto } from "./dto/update-profesor.dto";
import { AssignCourseDto } from "./dto/assign-course.dto";

@Injectable()
export class ProfesoresService {
  constructor(
    @InjectRepository(Profesor) private readonly repo: Repository<Profesor>,
    @InjectRepository(ProfesorCurso) private readonly pcRepo: Repository<ProfesorCurso>,
  ) {}

  // Crear profesor
  async create(dto: CreateProfesorDto): Promise<Profesor> {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  // Listar
  findAll(): Promise<Profesor[]> {
    return this.repo.find({ order: { id: "DESC" } });
  }

  // Traer uno
  async findOne(id: number): Promise<Profesor> {
    const p = await this.repo.findOne({ where: { id } });
    if (!p) throw new NotFoundException("El profesor no existe");
    return p;
  }

  // Actualizar
  async update(id: number, dto: UpdateProfesorDto): Promise<Profesor> {
    const p = await this.findOne(id);
    Object.assign(p, dto);
    return this.repo.save(p);
  }

  // Borrar
  async remove(id: number): Promise<void> {
    const res = await this.repo.delete(id);
    if (res.affected === 0) throw new NotFoundException("El profesor no existe");
  }

  // Asignar curso
  async assignCourse(idProfesor: number, dto: AssignCourseDto) {
    await this.findOne(idProfesor);
    const exists = await this.pcRepo.findOne({ where: { profesorId: idProfesor, courseId: dto.courseId } });
    if (exists) throw new ConflictException("El curso ya está asignado a este profesor");
    const link = this.pcRepo.create({ profesorId: idProfesor, courseId: dto.courseId });
    return this.pcRepo.save(link);
  }

  // Listar cursos asignados
  async listCourses(idProfesor: number) {
    await this.findOne(idProfesor);
    return this.pcRepo.find({ where: { profesorId: idProfesor }, order: { id: "DESC" } });
  }

  // Quitar curso
  async unassignCourse(idProfesor: number, idCurso: number) {
    await this.findOne(idProfesor);
    const res = await this.pcRepo.delete({ profesorId: idProfesor, courseId: idCurso });
    if (res.affected === 0) throw new NotFoundException("No existe esa asignación");
  }
}
