const express = require('express');
const cors = require('cors');  
const camisetaRouter = require('./routes/camisetas');
const comandaRouter = require('./routes/comandas');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); 

app.use('/api/camisetas', camisetaRouter);
app.use('/api/comandas', comandaRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno' });
});

app.listen(PORT, () => {
  console.log(`Server funciona http://localhost:${PORT}`);
});
  