const express = require("express");
const router = express.Router();
const comprasController = require("../controllers/compraController");
const Compra =  require("../models/Compra")


router.get("/compras", comprasController.getCompra);

router.post("/crearCompra", comprasController.crearCompra);

router.post("/editarCompra", comprasController.editarCompra);

router.get('/borrarCompra/:id', comprasController.borrarCompra)



module.exports = router;
