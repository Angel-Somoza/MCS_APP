import { Injectable } from '@nestjs/common';
// Injectable permite que este servicio pueda ser inyectado en controladores u otros servicios

import { InjectModel } from '@nestjs/mongoose';
// Decorador que permite inyectar un modelo de Mongoose en el servicio

import { Model } from 'mongoose';
// Importamos Model de Mongoose para tipar nuestro modelo de usuario

import { User, UserDocument } from './schemas/user.schema';
// Importamos la clase y el tipo de documento de usuario

@Injectable()
// Marca la clase como un servicio que puede ser inyectado
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  // Inyectamos el modelo de usuario de Mongoose
  // userModel nos permite interactuar con la base de datos

  async create(createUserDto: any): Promise<User> {
    // Crea un nuevo usuario
    const newUser = new this.userModel(createUserDto);
    // Creamos una instancia del modelo con los datos recibidos
    return newUser.save();
    // Guardamos el usuario en la base de datos y devolvemos la promesa
  }

  async findAll(): Promise<User[]> {
    // Obtiene todos los usuarios
    return this.userModel.find().exec();
    // find() busca todos los documentos, exec() ejecuta la consulta
  }

  async findOne(id: string): Promise<User | null> {
    // Obtiene un usuario por su id
    return this.userModel.findById(id).exec();
    // findById busca por ID, devuelve el usuario o null si no existe
  }

  async update(id: string, updateUserDto: any): Promise<User | null> {
    // Actualiza un usuario por su id
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    // findByIdAndUpdate actualiza el documento y { new: true } devuelve el documento actualizado
  }

  async remove(id: string): Promise<User | null> {
    // Elimina un usuario por su id
    return this.userModel.findByIdAndDelete(id).exec();
    // findByIdAndDelete elimina el documento y devuelve el usuario eliminado o null
  }
}
    