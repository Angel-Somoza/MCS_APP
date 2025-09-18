import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfesoresController } from "./profesores.controller";
import { ProfesoresService } from "./profesores.service";
import { Profesor } from "./profesor.entity";
import { ProfesorCurso } from "./profesor-curso.entity";
import { ProfesoresMessages } from "./profesores.messages";

@Module({
  imports: [TypeOrmModule.forFeature([Profesor, ProfesorCurso])],
  controllers: [ProfesoresController, ProfesoresMessages],
  providers: [ProfesoresService],
})
export class ProfesoresModule {}
