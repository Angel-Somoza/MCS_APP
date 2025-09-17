import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "tasks" }) // tabla "tasks"
export class Task {
  @PrimaryGeneratedColumn()
  id: number; // id autoincremental

  @Column({ length: 200 })
  title: string; // título cortito de la tarea

  @Column({ type: "text", nullable: true })
  description?: string; // detalle opcional

  @Column({ default: false })
  done: boolean; // marcamos si ya se terminó

  @CreateDateColumn()
  createdAt: Date; // SQL lo llena solo

  @UpdateDateColumn()
  updatedAt: Date; // SQL lo actualiza solo al modificar
}
