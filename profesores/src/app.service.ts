import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profesor, ProfesorDocument } from './schemas/profesor.schema';

@Injectable()
export class AppService {

  constructor(
    @InjectModel(Profesor.name) private readonly profesorModel: Model<ProfesorDocument>,
  ) {}

  //obtener todos los profesores
  async findAll(): Promise<Profesor[]> {
    return this.profesorModel.find().exec();
  }

  //crear profesor
  async create(profesordata: Partial<Profesor>): Promise<Profesor> {
  const newProfesor = new this.profesorModel(profesordata);
  return newProfesor.save();
}

//actualizar profesor
  async update(id: string, data: Partial<Profesor>): Promise<Profesor | null> {
  return this.profesorModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  //eliminar profesor
  async delete(id: string): Promise<Profesor | null> {
  return this.profesorModel.findByIdAndDelete(id).exec();
  }
}
