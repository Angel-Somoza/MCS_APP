const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(express.json());


const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/db_microservicios'
});

app.get('/', (req, res) => {
  res.send('Microservicio Node.js + Express + PostgreSQL funcionando!');
});


// Obtener todos los cursos
app.get('/cursos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cursos');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Crear un nuevo curso
app.post('/cursos', async (req, res) => {
  const { nombre, descripcion, creditos, duracion_horas, fecha_inicio, estado } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO cursos (nombre, descripcion, creditos, duracion_horas, fecha_inicio, estado)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [nombre, descripcion, creditos, duracion_horas, fecha_inicio, estado || 'activo']
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
