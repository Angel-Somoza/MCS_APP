import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'USERS_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3001 } },
      { name: 'COURSES_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3002 } },
      { name: 'PRODUCTS_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3003 } },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
