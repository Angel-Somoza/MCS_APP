import { NestFactory } from '@nestjs/core';
import { EstudiantesModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EstudiantesModule,
    {
      transport: Transport.TCP,
      options: { host: 'localhost', port: 3004 },
    },
  );
  await app.listen();
  console.log('📚 Courses microservice corriendo en 3004');
}
bootstrap();
