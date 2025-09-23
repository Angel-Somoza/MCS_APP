import { AppService } from './app.service';
import { Profesor } from './schemas/profesor.schema';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getProfesores(): Promise<Profesor[]>;
    createProfesor(data: Partial<Profesor>): Promise<Profesor>;
    updateProfesor(data: {
        id: string;
        update: Partial<Profesor>;
    }): Promise<Profesor | null>;
    deleteProfesor(id: string): Promise<Profesor | null>;
}
