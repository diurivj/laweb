import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { createClient } from '@libsql/client';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const turso = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_DB_AUTH_TOKEN,
});

// CREATE
app.post('/food', async (req, res) => {
  const { name, author } = req.body;

  const { lastInsertRowid } = await turso.execute(`
		INSERT INTO foods (name, author) VALUES ("${name}", "${author}");
	`);

  const result = await turso.execute(`
		SELECT * FROM foods WHERE id = ${lastInsertRowid}
	`);

  const food = result.rows[0];

  res.json(food);
});

// READ
app.get('/food', async (req, res) => {
  const result = await turso.execute(`
		SELECT * FROM foods;
	`);

  res.json(result.rows);
});

app.get('/food/:id', async (req, res) => {
  const { id } = req.params;
  const result = await turso.execute(`
		SELECT * FROM foods WHERE id = ${id};
	`);

  const food = result.rows[0];

  if (!food) {
    return res.json({ msg: 'Not found' });
  }

  res.json(food);
});

// UPDATE
app.patch('/food/:id', async (req, res) => {
  const { id } = req.params;
  const { name, author } = req.body;

  if (!name && !author) {
    return res.json({ error: 'Name and/or author are missing' });
  }

  if (name && author) {
    await turso.execute(`
			UPDATE foods SET name = "${name}", author = "${author}" WHERE id = ${id};
		`);
  } else if (name) {
    await turso.execute(`
			UPDATE foods SET name = "${name}" WHERE id = ${id};
		`);
  } else if (author) {
    await turso.execute(`
			UPDATE foods SET author = "${author}" WHERE id = ${id};
		`);
  }

  const result = await turso.execute(`
		SELECT * FROM foods WHERE id = ${id};
	`);

  res.json(result.rows[0]);
});

// DELETE
app.delete('/food/:id', async (req, res) => {
  const { id } = req.params;

  await turso.execute(`DELETE FROM foods WHERE id = ${id};`);

  res.json({ msg: 'Success', deletedId: id });
});

app.listen(3000, () => {
  console.log(`Running on port 3000`);
});

// RESTful API
// 1. API, que te permita realizar todas las acciones del CRUD
// 2. Crear data -> HTTP POST method/verb -> /anecdotario -> Create -> regresar eso que se creo
// 3. Leer data -> HTTP GET method/verb -> /anecdotario -> Read
// 4. Actualizar data -> HTTP PUT/PATCH method/verb -> /anecdotario/:id -> Update -> regresar eso que se actualizo
// 5. Borrar data -> HTTP DELETE method/verb -> /anecdotario/:id -> Delete -> regresar lo que se borro, o el id de lo borrado
// 6. El formato debe ser JSON
