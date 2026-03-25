const express = require('express');
const comandaController = require('../controllers/comandasController');
const router = express.Router();

router.post('/', comandaController.crear);
router.get('/', comandaController.listar);
router.get('/:id', comandaController.detalle);

module.exports = router;
