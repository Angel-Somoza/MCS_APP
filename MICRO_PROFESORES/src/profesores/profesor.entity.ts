import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, Index } from "typeorm";
import { ProfesorCurso } from "./profesor-curso.entity";

@Entity({ name: "profesores" })
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number; // id autoincremental

  @Index()
  @Column({ length: 150 })
  nombre: string; // nombre completo

  @Index({ unique: true })
  @Column({ length: 180 })
  email: string; // correo único

  @Column({ length: 30, nullable: true })
  telefono?: string; // opcional

  @Column({ default: true })
  activo: boolean; // habilitado

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => ProfesorCurso, pc => pc.profesor, { cascade: true })
  cursos: ProfesorCurso[];
}
