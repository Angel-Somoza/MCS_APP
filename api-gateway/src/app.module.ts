import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'COURSES_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3002 } },
<<<<<<< HEAD
      { name: 'PROFESORES_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3005 } },
=======
      { name: 'PRODUCTS_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3003 } },
      { name: 'ESTUDIANTES_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3004 } },
>>>>>>> prueba3
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}