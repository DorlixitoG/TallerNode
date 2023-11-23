const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();

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
  try {
    const { username, email, password } = req.body

    const user = new Usuario({ username, email, password })

    await user.save();
    res.redirect("/usuarios");
  } catch (err) {
    res.status(500).send("Error al obtener la lista de usuarios");
  }
}
