import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('cursos')
export class Course {
  @PrimaryGeneratedColumn()
  id_curso: number;

  @Column({ length: 100, unique: true })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'smallint' })
  creditos: number;

  @Column({ type: 'smallint', nullable: true })
  duracion_horas: number;

  @Column({ type: 'date', nullable: true })
  fecha_inicio: string;

  @Column({ length: 20, default: 'activo' })
  estado: string;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;
}
