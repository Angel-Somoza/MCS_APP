import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Microservicio TCP (para API Gateway)
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { host: 'localhost', port: 3004 },
  });

  await app.startAllMicroservices();

  // Servidor HTTP (para pruebas en Postman)
  await app.listen(3005);
  console.log('👨‍🎓 Estudiantes microservice: TCP en 3004 | HTTP en http://localhost:3005');
}
bootstrap();
