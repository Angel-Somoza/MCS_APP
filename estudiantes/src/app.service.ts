import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import * as odbc from 'odbc';

@Injectable()
export class EstudiantesService implements OnModuleInit, OnModuleDestroy {
  private connection: odbc.Connection | null = null;


  private readonly connectionString =
    'Driver={SQL Server};Server=localhost\\SQLEXPRESS;Database=Microservicios;Trusted_Connection=Yes;';

  async onModuleInit() {
    await this.ensureConnected();
  }

  async onModuleDestroy() {
    try {
      if (this.connection) {
        await this.connection.close();
        console.log('🔌 Conexión ODBC cerrada');
      }
    } catch (err) {
        console.error('Error cerrando conexión ODBC:', err);
    }
  }

  private async ensureConnected() {
    if (this.connection) return;
    try {
      this.connection = await odbc.connect(this.connectionString);
      console.log('✅ Conectado a SQL Server vía ODBC');
    } catch (err) {
      console.error('❌ Error conectando a SQL Server vía ODBC:', err);
      throw err;
    }
  }

  async findAll() {
    try {
      await this.ensureConnected();
      const result = await this.connection!.query(
        'SELECT idalumno, nombre, apellido, edad, grado FROM Alumnos'
      );
      return result;
    } catch (err) {
      console.error('❌ Error en query ODBC findAll:', err);
      throw {
        status: 'error',
        message: 'No se pudo obtener estudiantes.',
        details: err.message || err,
      };
    }
  }

  async findOne(id: number) {
    try {
      await this.ensureConnected();
      const result = await this.connection!.query(
        'SELECT idalumno, nombre, apellido, edad, grado FROM Alumnos WHERE idalumno = ?',
        [id],
      );
      return result[0] || null;
    } catch (err) {
      console.error('❌ Error en query ODBC findOne:', err);
      throw {
        status: 'error',
        message: `No se pudo obtener estudiante con id ${id}.`,
        details: err.message || err,
      };
    }
  }
}
