import { Module } from '@nestjs/common';
// Importamos el decorador Module de NestJS
// Se usa para organizar el código en módulos (agrupa controladores y servicios)

import { UsersService } from './users.service';
// Importamos el servicio de usuarios, que contiene la lógica de negocio

import { UsersController } from './users.controller';
// Importamos el controlador de usuarios, que maneja las rutas HTTP

import { MongooseModule } from '@nestjs/mongoose';
// Importamos MongooseModule para poder usar MongoDB en NestJS

import { User, UserSchema } from './schemas/user.schema';
// Importamos el esquema y la clase User, que definen la estructura de los documentos en la base de datos

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    // Registramos el esquema User con Mongoose
    // Esto permite inyectar el modelo User en el servicio UsersService
  ],
  controllers: [UsersController],
  // Aquí se declara el controlador que pertenece a este módulo

  providers: [UsersService],
  // Aquí se declara el servicio que pertenece a este módulo
})
export class UsersModule {}
// Creamos el módulo UsersModule
// Agrupa todo lo relacionado con los usuarios: controlador, servicio y esquema