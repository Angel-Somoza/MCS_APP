import { Document } from 'mongoose';
export type ProfesorDocument = Profesor & Document;
export declare class Profesor {
    nombre: string;
    apellido: string;
    materia: string;
    email: string;
}
export declare const ProfesorSchema: import("mongoose").Schema<Profesor, import("mongoose").Model<Profesor, any, any, any, Document<unknown, any, Profesor, any, {}> & Profesor & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Profesor, Document<unknown, {}, import("mongoose").FlatRecord<Profesor>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Profesor> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
