import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { ProfesoresService } from "./profesores.service";
import { CreateProfesorDto } from "./dto/create-profesor.dto";
import { UpdateProfesorDto } from "./dto/update-profesor.dto";

@Controller()
export class ProfesoresMessages {
  constructor(private readonly service: ProfesoresService) {}

  @MessagePattern({ cmd: "get_profesores" })
  findAll() {
    return this.service.findAll();
  }

  @MessagePattern({ cmd: "get_profesor" })
  findOne(@Payload() id: number) {
    return this.service.findOne(Number(id));
  }

  @MessagePattern({ cmd: "create_profesor" })
  create(@Payload() dto: CreateProfesorDto) {
    return this.service.create(dto);
  }

  @MessagePattern({ cmd: "update_profesor" })
  update(@Payload() data: { id: number; dto: UpdateProfesorDto }) {
    return this.service.update(Number(data.id), data.dto);
  }

  @MessagePattern({ cmd: "delete_profesor" })
  remove(@Payload() id: number) {
    return this.service.remove(Number(id));
  }

  @MessagePattern({ cmd: "assign_course" })
  assign(@Payload() data: { id: number; courseId: number }) {
    return this.service.assignCourse(Number(data.id), { courseId: Number(data.courseId) });
  }

  @MessagePattern({ cmd: "list_courses" })
  list(@Payload() id: number) {
    return this.service.listCourses(Number(id));
  }

  @MessagePattern({ cmd: "unassign_course" })
  unassign(@Payload() data: { id: number; courseId: number }) {
    return this.service.unassignCourse(Number(data.id), Number(data.courseId));
  }
}
