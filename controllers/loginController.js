// authController.js

const Usuario = require("../models/Usuario");

module.exports.login = async (req, res) => {
    const { username, password } = req.body;

    Usuario.findOne({ username })
      .then(Usuario => {
        if (!Usuario) {
          res.status(500).send("No existe");
        } else {
            Usuario.isCorrectPassword(password, (err, result) => {
            if (err) {
              res.status(500).send("Error de autenticacion");
            } else if (result) {
              res.redirect('/index');
            } else {
              res.status(500).send("Contraseña/Usuario incorrecto");
            }
          });
        }
      })
      .catch(err => {
        res.status(500).send("Error pa");
      });
  };