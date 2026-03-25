const express = require('express');
const camisetaController = require('../controllers/camisetasController');
const router = express.Router();

router.get('/', camisetaController.listar);

router.get('/:id', camisetaController.detalle);

module.exports = router;
