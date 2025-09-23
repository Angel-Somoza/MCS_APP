import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('cursos') 
export class Course {
  @PrimaryGeneratedColumn({ name: 'id_curso' })
  id_curso: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'smallint' })
  creditos: number;

  @Column({ type: 'smallint', name: 'duracion_horas', nullable: true })
  duracion_horas: number;

  @Column({ type: 'date', name: 'fecha_inicio', nullable: true })
  fecha_inicio: string;

  @Column({ type: 'varchar', length: 20, default: 'activo' })
  estado: string;

  @CreateDateColumn({ name: 'creado_en', type: 'timestamp' })
  creado_en: Date;
}
