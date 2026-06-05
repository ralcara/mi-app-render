const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Version final — pipeline CI/CD completo</h1>');
});

if (require.main === module) {
  app.listen(PORT, () => console.log('Servidor en puerto ' + PORT));
}

module.exports = app;
