const express = require('express');
const router = express.Router();
const productoController = require('../controllers/ProductoController');

const upload = require('../libreria/storage');




//Mostrar todos los alumnos (GET)
router.get('/productos',productoController.mostrar);

//Crear alumno(POST)
router.post('/crear',upload.single('imagen'),productoController.crear);


//Editar alumno(POST)
router.post('/editar',productoController.editar);

//Eliminar alumno(POST)
router.get('/borrar/:id',productoController.borrar);

module.exports= router;