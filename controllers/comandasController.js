const comandasService = require('../services/comandasService');

exports.crear = (req, res) => {
  try {
    const ticket = comandasService.crearComanda(req.body);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listar = (req, res) => {
  res.json(comandasService.listarComandas());
};

exports.detalle = (req, res) => {
  const comanda = comandasService.getComanda(req.params.id);
  if (!comanda) {
    return res.status(404).json({ error: 'Comanda no encontrada' });
  }
  res.json(comanda);
};
