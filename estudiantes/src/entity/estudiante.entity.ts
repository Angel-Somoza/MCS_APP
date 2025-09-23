import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Estudiantes') // Nombre exacto de la tabla en SQL Server
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number; // Coincide con ID INT IDENTITY(1,1)

  @Column({ type: 'nvarchar', length: 100 })
  nombre: string; // Nombre NVARCHAR(100) NOT NULL

  @Column({ type: 'int' })
  edad: number; // Edad INT NOT NULL

  @Column({ type: 'int' })
  grado: number; // Grado INT NOT NULL

  @Column({ type: 'decimal', precision: 3, scale: 2 })
  promedio: number; // Promedio DECIMAL(3,2) NOT NULL
}
