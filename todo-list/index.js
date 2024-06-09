import express from 'express';
import bodyParser from 'body-parser';
import { createClient } from '@libsql/client';

const turso = createClient({
  url: '',
  authToken: '',
});

// Aqui hay magia oscura
// y esta creando el server
const server = express();

// Configuracion para poder acceder al body
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Configuracion para usar handlebars (aka hbs)
server.set('view engine', 'hbs');

// Ruta encargada de mostrar el form y los todos
// R
server.get('/', async (req, res) => {
  const sort = req.query.sort;

  let query = `SELECT * FROM todos ORDER BY created_at DESC`;
  if (sort !== undefined) {
    query = `SELECT * FROM todos WHERE completed = ${Number(req.query.sort)} ORDER BY created_at DESC`;
  }

  const result = await turso.execute(query);
  const todos = result.rows;

  res.render('home.hbs', { todos });
});

// Ruta encargada de crear el todo
// C
server.post('/create', async (req, res) => {
  const todo = req.body.todo;

  const result = await turso.execute(
    `INSERT INTO todos (todo) VALUES ("${todo}")`
  );

  res.redirect('/');
});

// Ruta encargada de modificar el todo
// U
server.post('/update', async (req, res) => {
  const id = req.body.todoId;
  const completed = Boolean(Number(req.body.completed));

  let query;
  if (completed) {
    query = `UPDATE todos SET completed = 0 WHERE id = ${id}`;
  } else {
    query = `UPDATE todos SET completed = 1 WHERE id = ${id}`;
  }

  const result = await turso.execute(query);

  res.redirect('/');
});

// Ruta encargada de mandar todo alv
// D
server.post('/delete', async (req, res) => {
  await turso.execute(`DELETE FROM todos`);
  res.redirect('/');
});

server.listen(3000, () => {
  console.log('Running on http://localhost:3000');
});

/*
	const completed = req.body.completed -> form -> input hidden -> 1 o 0

	"1" o "0"
	Number("1") Number("0") -> 1 o 0
	Boolean(0) -> false Boolean(1) -> true
*/
