import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfesoresModule } from "./profesores/profesores.module";
import { Profesor } from "./profesores/profesor.entity";
import { ProfesorCurso } from "./profesores/profesor-curso.entity";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "mssql",
        host: process.env.DB_SERVER,
        port: parseInt(process.env.DB_PORT || "1433", 10),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [Profesor, ProfesorCurso],
        synchronize: false,
        options: {
          encrypt: false,
          trustServerCertificate: true,
          instanceName: process.env.DB_INSTANCE && process.env.DB_INSTANCE.length > 0 ? process.env.DB_INSTANCE : undefined
        }
      }),
    }),
    ProfesoresModule,
  ],
})
export class AppModule {}
