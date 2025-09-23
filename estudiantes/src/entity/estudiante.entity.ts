import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Estudiantes') 
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'nvarchar', length: 100 })
  nombre: string;

  @Column({ type: 'int' })
  edad: number;

  @Column({ type: 'int' })
  grado: number;

  @Column({ type: 'decimal', precision: 3, scale: 2 })
  promedio: number;
}
