const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventasController');
const Venta = require("../models/venta")


router.get('/ventas', ventaController.getVentas);

router.post('/crearVenta', ventaController.crearVenta);

router.post('/editarVenta', ventaController.editarVenta);

router.get('/borrarVenta/:id', ventaController.borrar);

module.exports = router;
