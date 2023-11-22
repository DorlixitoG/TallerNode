const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const app = express();


const db = require("./db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

const usuariosRoutes = require("./routes/usuariosRoutes");
app.use(usuariosRoutes);

const clientesRoutes = require("./routes/clientesRoutes");
app.use(clientesRoutes);

// Configurar el motor de plantillas (usando EJS)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Rutas
app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.render("login", {});
});

app.get("/index", (req, res) => {
  res.render("index", {});
});


app.post("/authenticate", async (req, res) => {
  const { correo, contraseña } = req.body;
  try {
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      res.status(500).send("No existe el usuario");
    } else {
      bcrypt.compare(contraseña, usuario.contraseña, (err, result) => {
        if (err) {
          res.status(500).send("Error de autenticación");
        } else if (result) {
          res.redirect("/index");
        } else {
          res.status(500).send("Contraseña incorrecta");
        }
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al autenticar al usuario");
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
