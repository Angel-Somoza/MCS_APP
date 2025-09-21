import { Module } from '@nestjs/common';
import { EstudiantesController } from './app.controller';
import { EstudiantesService } from './app.service';

@Module({
  imports: [],
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
})
export class AppModule {}

