const http = require('http');
const turso = require('@libsql/client');

http
  .createServer((request, response) => {
    const client = turso.createClient({
      url: 'libsql://instagrammm-diurivj.turso.io',
      authToken:
        'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTY3Mzc1OTgsImlkIjoiOTg0MzRkYzItZGZlZi00N2I5LWJkZTMtOTdhZjE5NjBmZWJlIn0.2zrSWH1vzoIVUUHCzq0NQQ03t_JKS8lPSG_v5dvKSnBAFpTnre27x4q85x6N67k7fBCTRKmji9fssEfL8BuOAQ',
    });

    // Home page
    if (request.url === '/') {
      return client.execute('SELECT * FROM users').then(r => {
        const users = r.rows;
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(`
					<html>
						<h1>Bienvenido a mi pagina super primitiva</h1>
						<p>En mi pagina tengo ${users.length} usuarios</p>
						<p>El primer usuario es ${users[0].first_name} su handle es ${users[0].username}</p>
					</html>
				`);
        response.end();
      });
    }

    // api endpoint
    if (request.url === '/users') {
      return client.execute('SELECT * FROM users').then(r => {
        const users = r.rows;
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify(users));
        response.end();
      });
    }

    // Faq page
    if (request.url === '/faq') {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(`
				<html>
					<h1>Bienvenido a mi pagina super primitiva, estas en la seccion de preguntas frecuentes</h1>
				</html>
			`);
      response.end();
      return;
    }

    // Si llega aqui el usuario, significa que la ruta no la tenemos contemplada
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write(`
			<html>
				<h1>Pagina no encontrada</h1>
				<a href="/">Regresa al home</a>
			</html>
		`);
    response.end();
  })
  .listen(3000, () => console.log('Running on port 3000'));
