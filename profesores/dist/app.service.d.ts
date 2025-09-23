import { Model } from 'mongoose';
import { Profesor, ProfesorDocument } from './schemas/profesor.schema';
export declare class AppService {
    private readonly profesorModel;
    constructor(profesorModel: Model<ProfesorDocument>);
    findAll(): Promise<Profesor[]>;
    create(profesordata: Partial<Profesor>): Promise<Profesor>;
    update(id: string, data: Partial<Profesor>): Promise<Profesor | null>;
    delete(id: string): Promise<Profesor | null>;
}
