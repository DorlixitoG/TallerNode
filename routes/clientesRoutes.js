const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientesController");
const Cliente =  require("../models/Cliente")

router.get("/clientes", clientesController.getClientes);

router.post("/crearCliente", clientesController.crearCliente);

router.post("/editarCliente", clientesController.editarCliente);

router.get('/borrar/:id', clientesController.borrar)

module.exports = router;
