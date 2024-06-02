import express from 'express';
import { createClient } from '@libsql/client';

const app = express();

// Configuracion de nuestro servidor

// Conexion a la DB
const turso = createClient({
  url: '',
  authToken: '',
});

// Le estamos diciendo al servidor de
// express que queremos usar handlebars
app.set('view engine', 'hbs');

// Le estamos diciendo al servidor de express
// donde van a estar nuestros archivos de handlebars
app.set('views', './views');

// Variables globales
app.locals.title = 'El risas';

// Rutas
app.get('/', async (req, res) => {
  const result = await turso.execute(
    `SELECT title, content FROM jokes ORDER BY RANDOM() LIMIT 1`
  );
  const rows = result.rows;
  const joke = rows[0];

  res.render('index', { joke });
});

app.get('/users/:username', async (req, res) => {
  const username = req.params.username;

  const result = await turso.execute(`
		SELECT users.*, jokes.id AS joke_id, jokes.*
		FROM users
		INNER JOIN jokes ON jokes.author_id = users.id 
		WHERE username = "${username}"
	`);

  const jokes = result.rows;

  if (jokes.length === 0) {
    return res.redirect('/404');
  }

  const user = {
    name: jokes[0].name,
    username: jokes[0].username,
  };

  app.locals.title = username;
  res.render('profile', { jokes, user });
});

app.get('/jokes/:jokeId', async (req, res) => {
  const jokeId = req.params.jokeId;

  const result = await turso.execute(`
		SELECT title, content FROM jokes WHERE id = "${jokeId}"
	`);

  const rows = result.rows;
  const joke = rows[0];

  if (!joke) {
    return res.redirect('/404');
  }

  app.locals.title = joke.title;
  res.render('joke', { joke });
});

app.get('*', (req, res) => {
  res.render('not-found');
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});
