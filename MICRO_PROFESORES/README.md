# MICRO_PROFESORES
CRUD de profesores + asignacion de cursos. NestJS + TypeORM + SQL Server.

- Base URL: `/api/profesores`
- Crear: `POST /api/profesores` { nombre, email, telefono?, activo? }
- Listar: `GET /api/profesores`
- Ver uno: `GET /api/profesores/:id`
- Editar: `PATCH /api/profesores/:id`
- Borrar: `DELETE /api/profesores/:id`
- Asignar curso: `POST /api/profesores/:id/cursos` { courseId }
- Listar cursos: `GET /api/profesores/:id/cursos`
- Quitar curso: `DELETE /api/profesores/:id/cursos/:courseId`

.env ejemplo:
DB_SERVER=localhost
DB_PORT=1433
DB_USER=CRISTIANAPP
DB_PASSWORD=crisane_1705
DB_NAME=bd_profesores_micro
PORT=4100
