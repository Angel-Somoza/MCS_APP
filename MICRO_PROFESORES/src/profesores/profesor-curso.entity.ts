import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, Unique, Column, Index } from "typeorm";
import { Profesor } from "./profesor.entity";

@Unique(["profesorId","courseId"])
@Entity({ name: "profesores_cursos" })
export class ProfesorCurso {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  profesorId: number;

  @Index()
  @Column()
  courseId: number; // id del curso (proveniente de otro micro o tabla)

  @ManyToOne(() => Profesor, p => p.cursos, { onDelete: "CASCADE" })
  profesor: Profesor;

  @CreateDateColumn()
  assignedAt: Date;
}
