import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// Importamos decoradores y funciones de NestJS para definir esquemas de MongoDB
// Prop -> define propiedades del esquema
// Schema -> define la clase como un esquema de MongoDB
// SchemaFactory -> crea el esquema real a partir de la clase

import { Document } from 'mongoose';
// Importamos Document de Mongoose para extenderlo y tener compatibilidad con MongoDB

export type UserDocument = User & Document;
// Definimos un tipo que combina nuestra clase User con Document
// Esto permite que al usar el modelo podamos tener tanto los campos de User como los métodos de Document

@Schema()
// Decorador que marca la clase como un esquema de MongoDB
export class User {
  @Prop({ required: true })
  // Esta propiedad es obligatoria en la base de datos
  name: string;

  @Prop({ required: true, unique: true })
  // Obligatoria y única, no se pueden repetir correos electrónicos
  email: string;

  @Prop()
  // Propiedad opcional
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
// Crea el esquema de MongoDB a partir de la clase User
// Este esquema se usa para crear el modelo de usuario que interactúa con la base de datos