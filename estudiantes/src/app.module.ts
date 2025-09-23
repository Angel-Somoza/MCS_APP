import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudiantesController } from './app.controller';
import { EstudiantesService } from './app.service';
import { Estudiante } from './entity/estudiante.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: '1234',
  database: 'Escuela',
  entities: [Estudiante],
  synchronize: false, 
  options: {
        encrypt: false, 
        trustServerCertificate: true, 
      },
    }),
    TypeOrmModule.forFeature([Estudiante]),
  ],
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
})
export class EstudiantesModule {}
