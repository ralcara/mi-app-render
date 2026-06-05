const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Version 1 desplegada con Render</h1>');
});

if (require.main === module) {
  app.listen(PORT, () => console.log('Servidor en puerto ' + PORT));
}

module.exports = app;

esto es un error de sintaxis }{
