const express = require('express');
const bodyParser = require('body-parser');
const imageRoutes = require('./routes/imageRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/imagens', imageRoutes);

const port = 9090;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
