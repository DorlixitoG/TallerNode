const express = require("express");
const router = express.Router();
const proveedoresController = require("../controllers/proveedoresController");
const Usuario =  require("../models/Proveedor")


router.get("/proveedores", proveedoresController.getProveedores);

router.post("/crearProveedor", proveedoresController.crearProveedor);

router.post("/editarProveedor", proveedoresController.editarProveedor);

router.get('/borrarProveedores/:id', proveedoresController.borrarProveedores)

module.exports = router;
