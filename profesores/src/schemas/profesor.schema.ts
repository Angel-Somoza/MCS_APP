import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfesorDocument = Profesor & Document;

@Schema()
export class Profesor {
  @Prop({ required: true })
  nombre: string;

  @Prop()
  apellido: string;

  @Prop()
  materia: string;

  @Prop()
  email: string;
}

export const ProfesorSchema = SchemaFactory.createForClass(Profesor);
