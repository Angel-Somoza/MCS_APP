import { Test, TestingModule } from '@nestjs/testing';
import { EstudiantesController } from './app.controller';
import { EstudiantesService } from './app.service';

describe('EstudiantesController', () => {
  let estudiantesController: EstudiantesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EstudiantesController],
      providers: [EstudiantesService],
    }).compile();

    estudiantesController = app.get<EstudiantesController>(EstudiantesController);
  });

  describe('root', () => {
    it('should return estudiantes', () => {
      expect(estudiantesController.getEstudiantes()).toEqual([
        { nombre: 'Juan', apellido: 'Pérez', edad: 20, grado: '3ro' },
      ]);
    });
  });
});
