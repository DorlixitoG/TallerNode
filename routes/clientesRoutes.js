const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientesController");

// Ruta para obtener la lista de clientes
router.get("/clientes", clientesController.getClientes);

// Ruta para agregar un nuevo cliente
router.post("/", clientesController.agregarCliente);

module.exports = router;
