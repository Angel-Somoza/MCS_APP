import { NestFactory } from '@nestjs/core';
import { EstudiantesModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(EstudiantesModule);

  await app.listen(3004);
  console.log('👨‍🎓 Microservicio Estudiantes corriendo en http://localhost:3004');
}
bootstrap();
