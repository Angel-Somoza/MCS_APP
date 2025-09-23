import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'COURSES_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3002 } },
      { name: 'PROFESORES_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3005 } },
      { name: 'ESTUDIANTES_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3004 } },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}