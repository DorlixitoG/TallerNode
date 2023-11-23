const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const {body, validationResult} = require('express-validator')

// Ruta para obtener la lista de usuarios
module.exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    res.render("usuarios", { usuarios });
  } catch (error) {
    res.status(500).send("Error al obtener la lista de usuarios");
  }
};

// Para crear el usuario
module.exports.crearUsuario = async (req, res) => {
  const {username,email,password} = req.body

  const user = new Usuario({ username,email,password })

  user.save()
  .then(() => {
    res.redirect("/usuarios");
  })
  .catch(err => {

    app.post("/usuarios/crearUsuario", [
      body('username', 'Ingrese un nombre')
      .exists()
      .isLength({min:5}),
      body('email','Ingrese un E-mail válido')
      .exists()
      .isEmail(),
      body('password', 'Ingrese una contraseña')
      .exists()
      .isLength({min:4}),
    ], (req, res)=>{
    
      //Validacion propia
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
          console.log(req.body)
          const valores = req.body
          const validaciones=errors.array()
          res.render('usuario',{validaciones:validaciones, valores})
          res.redirect("/usuarios");
      }else{
          res.send('!Validacion Exitosa!')
      }
    })
  });
}