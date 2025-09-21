import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'USERS_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3001 } },
      { name: 'COURSES_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3002 } },
      { name: 'PRODUCTS_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3003 } },
      { name: 'ESTUDIANTES_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3004 } },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}