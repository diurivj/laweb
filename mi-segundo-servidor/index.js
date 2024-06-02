// 1. Importo el paquete de package.json
import express from 'express';

// 2. Creo el servidor
const app = express();

// 3. Configurar nuestro servidor
app.get('/', (req, res) => {
  res.send(`<h1>Hola a todos desde express</h1>`);
});

// 4. Hacer accesibl el servidor
app.listen(3000, () => {
  console.log(`Listening on http://localhost:3000`);
});

// Importar archivos o modules de otros lugares
// CommonJs / Vanilla -> const express = require('express');
// ECMA -> import express from 'express';

// Exportar archivos o modulos a otros lugares
// CommonJs / Vanilla -> module.exports = express;
// ECMA -> export default express;
