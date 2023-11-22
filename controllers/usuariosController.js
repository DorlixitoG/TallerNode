const Usuario = require("../models/Usuario");

// Ruta para obtener la lista de usuarios
module.exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    res.render("usuarios", { usuarios });
  } catch (error) {
    res.status(500).send("Error al obtener la lista de usuarios");
  }
};

module.exports.mostrar = async function mostrar(req, res) {
  const usuarios = await usuarios.find({});
  return res.render("index", { usuarios: usuarios });
};

// Ruta para agregar un nuevo usuario
exports.agregarUsuario = async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  try {
    const usuario = new Usuario({ nombre, correo, contraseña });
    await usuario.save();
    res.redirect("/usuarios");
  } catch (error) {
    res.status(500).send("Error al agregar un nuevo usuario");
  }
};
