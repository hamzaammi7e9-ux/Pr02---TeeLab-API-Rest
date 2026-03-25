const camisetasService = require('../services/camisetasService');

exports.listar = (req, res) => {
  const camisetas = camisetasService.listarCamisetas(req.query);
  res.json(camisetas);
};

exports.detalle = (req, res) => {
  const camiseta = camisetasService.getCamiseta(req.params.id);
  if (!camiseta) {
    return res.status(404).json({ error: 'Camiseta no encontrada' });
  }
  res.json(camiseta);
};
