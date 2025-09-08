# Microservicio Node.js + Express + PostgreSQL

Este microservicio utiliza Express y PostgreSQL.

## Scripts
- `npm install` para instalar dependencias
- `npm run dev` para desarrollo (requiere nodemon)
- `npm start` para producción


## Endpoints
- `GET /` - Prueba de funcionamiento
- `GET /cursos` - Lista todos los cursos
- `POST /cursos` - Crea un nuevo curso (body: { nombre, descripcion, creditos, duracion_horas, fecha_inicio, estado })

## Configuración
- Edita `.env` para la conexión a tu base de datos PostgreSQL

## Tabla ejemplo
```sql
CREATE TABLE cursos (
  id_curso SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE,
  descripcion TEXT,
  creditos SMALLINT NOT NULL CHECK (creditos > 0),
  duracion_horas SMALLINT CHECK (duracion_horas > 0),
  fecha_inicio DATE,
  estado VARCHAR(20) NOT NULL DEFAULT 'activo',
  creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```
