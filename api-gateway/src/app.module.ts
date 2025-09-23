import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'COURSES_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3002 } },
      { name: 'PROFESORES_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3005 } },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
