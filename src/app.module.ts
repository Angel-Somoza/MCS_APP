import { Module } from '@nestjs/common';
// Importamos el decorador Module de NestJS
// Se usa para organizar el código en módulos

import { MongooseModule } from '@nestjs/mongoose';
// Importamos MongooseModule para conectarnos con MongoDB

import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
// Importamos nuestro módulo de usuarios, que contiene controlador, servicio y esquema

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/usersdb'),
    // Conectamos NestJS con la base de datos MongoDB
    // 'usersdb' es el nombre de la base de datos local
    // forRoot configura la conexión principal a MongoDB

    UsersModule,
    ProductsModule, 
    // Importamos el módulo de usuarios dentro del módulo principal
    // Esto permite que AppModule conozca todas las rutas y servicios de UsersModule
  ],
})
export class AppModule {}
// Creamos el módulo principal de la aplicación
// AppModule es el módulo raíz que arranca toda la aplicación NestJS