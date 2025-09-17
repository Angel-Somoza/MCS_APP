import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksModule } from "./tasks/tasks.module";
import { Task } from "./tasks/task.entity";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "mssql",
        host: process.env.DB_SERVER,                          // localhost
        port: parseInt(process.env.DB_PORT || "1433", 10),    // 1433
        username: process.env.DB_USER,                        // CRISTIANAPP
        password: process.env.DB_PASSWORD,                    // crisane_1705
        database: process.env.DB_NAME,                        // bd_tareas_micro
        entities: [Task],
        synchronize: true, // en dev crea/actualiza tablas según entidades
        options: {
          encrypt: false,
          trustServerCertificate: true,
          instanceName: process.env.DB_INSTANCE && process.env.DB_INSTANCE.length > 0 ? process.env.DB_INSTANCE : undefined
        }
      }),
    }),
    TasksModule,
  ],
})
export class AppModule {}
