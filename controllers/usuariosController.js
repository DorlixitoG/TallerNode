const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");

// Ruta para obtener la lista de usuarios
module.exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    res.render("usuarios", { usuarios });
  } catch (error) {
    res.status(500).send("Error al obtener la lista de usuarios");
  }
};


module.exports.crearUsuario = async (req, res) => {
  const {username,email,password} = req.body

  const user = new Usuario({ username,email,password })

  user.save()
  .then(() => {
    res.redirect("/usuarios");
  })
  .catch(err => {
    res.status(500).send("error al ingresar los datos");
  });
}
