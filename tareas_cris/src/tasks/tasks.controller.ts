import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller("tasks") // queda /api/tasks
export class TasksController {
  constructor(private readonly service: TasksService) {}

  // POST /api/tasks  -> crea
  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.service.create(dto);
  }

  // GET /api/tasks   -> lista
  @Get()
  findAll() {
    return this.service.findAll();
  }

  // GET /api/tasks/:id -> una sola
  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  // PATCH /api/tasks/:id -> actualiza parcial
  @Patch(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateTaskDto) {
    return this.service.update(id, dto);
  }

  // DELETE /api/tasks/:id -> borra
  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
