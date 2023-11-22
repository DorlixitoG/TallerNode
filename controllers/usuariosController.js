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

module.exports.mostrar = async function mostrar(req, res) {
  const usuarios = await usuarios.find({});
  return res.render("index", { usuarios: usuarios });
};

// Ruta para agregar un nuevo usuario
module.exports.crearUsuario = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Cifrar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario con la contraseña cifrada
    const usuario = new Usuario({ username, email, password: hashedPassword });

    // Guardar el usuario en la base de datos
    await usuario.save();

    // Redirigir a la página de usuarios después de agregar un nuevo usuario
    res.redirect("/usuarios");
  } catch (error) {
    res.status(500).send("Error al agregar un nuevo usuario");
  }
};
