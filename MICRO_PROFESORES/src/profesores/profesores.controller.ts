import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { ProfesoresService } from "./profesores.service";
import { CreateProfesorDto } from "./dto/create-profesor.dto";
import { UpdateProfesorDto } from "./dto/update-profesor.dto";
import { AssignCourseDto } from "./dto/assign-course.dto";

@Controller("profesores") // /api/profesores
export class ProfesoresController {
  constructor(private readonly service: ProfesoresService) {}

  // POST /api/profesores
  @Post()
  create(@Body() dto: CreateProfesorDto) {
    return this.service.create(dto);
  }

  // GET /api/profesores
  @Get()
  findAll() {
    return this.service.findAll();
  }

  // GET /api/profesores/:id
  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  // PATCH /api/profesores/:id
  @Patch(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateProfesorDto) {
    return this.service.update(id, dto);
  }

  // DELETE /api/profesores/:id
  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.service.remove(id);
  }

  // POST /api/profesores/:id/cursos   { courseId }
  @Post(":id/cursos")
  assignCourse(@Param("id", ParseIntPipe) id: number, @Body() dto: AssignCourseDto) {
    return this.service.assignCourse(id, dto);
  }

  // GET /api/profesores/:id/cursos
  @Get(":id/cursos")
  listCourses(@Param("id", ParseIntPipe) id: number) {
    return this.service.listCourses(id);
  }

  // DELETE /api/profesores/:id/cursos/:courseId
  @Delete(":id/cursos/:courseId")
  unassignCourse(
    @Param("id", ParseIntPipe) id: number,
    @Param("courseId", ParseIntPipe) courseId: number
  ) {
    return this.service.unassignCourse(id, courseId);
  }
}
