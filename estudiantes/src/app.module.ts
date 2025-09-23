import { Module } from '@nestjs/common';
import { EstudiantesService } from './app.service';
import { EstudiantesController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entity/estudiante.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      database: 'school',
      entities: [Estudiante],
      options: {
        encrypt: false
      },
     
    }),
    TypeOrmModule.forFeature([Estudiante])
  ],
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
})
export class EstudiantesModule {}