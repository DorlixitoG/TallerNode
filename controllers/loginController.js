// authController.js

const Usuario = require("../models/Usuario");

module.exports.login = async (req, res) => {
    const { username, password } = req.body;

    Usuario.findOne({ username })
      .then(Usuario => {
        if (!Usuario) {
          req.flash('error', 'Usuario no encontrado');
          res.redirect("/login");
        } else {
            Usuario.isCorrectPassword(password, (err, result) => {
            if (err) {
              req.flash('error', 'Error de autenticación');
              res.redirect("/login");
            } else if (result) {
              res.redirect('/index');
            } else {
              req.flash('error', 'Contraseña incorrecta');
              res.redirect("/login");
            }
          });
        }
      })
      .catch(err => {
        req.flash('error', 'Error interno del servidor');
      });
  };