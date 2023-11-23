const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");
const Usuario =  require("../models/Usuario")

// Ruta para obtener la lista de usuarios
router.get("/usuarios", usuariosController.getUsuarios);

// Ruta para agregar un nuevo usuario
router.post("/crearUsuario", usuariosController.crearUsuario);

// 

module.exports = router;
