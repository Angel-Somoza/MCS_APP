import { Module } from '@nestjs/common';
import { EstudiantesService } from './app.service';
import { EstudiantesController } from './app.controller';

@Module({
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
})
export class EstudiantesModule {}


