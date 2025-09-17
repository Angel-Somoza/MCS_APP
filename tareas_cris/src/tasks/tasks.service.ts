import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly repo: Repository<Task>
  ) {}

  // Crea una nueva tarea
  async create(dto: CreateTaskDto): Promise<Task> {
    const entity = this.repo.create(dto); // armamos el objeto
    return this.repo.save(entity);        // guardamos en SQL
  }

  // Lista todo
  findAll(): Promise<Task[]> {
    return this.repo.find({ order: { id: "DESC" } });
  }

  // Trae una por id
  async findOne(id: number): Promise<Task> {
    const item = await this.repo.findOne({ where: { id } });
    if (!item) throw new NotFoundException("La tarea no existe");
    return item;
  }

  // Actualiza por id
  async update(id: number, dto: UpdateTaskDto): Promise<Task> {
    const item = await this.findOne(id); // valida que exista
    Object.assign(item, dto);            // mezclamos cambios
    return this.repo.save(item);         // persistimos
  }

  // Borra por id
  async remove(id: number): Promise<void> {
    const res = await this.repo.delete(id);
    if (res.affected === 0) throw new NotFoundException("La tarea no existe");
  }
}
