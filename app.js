const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const app = express();
const flash = require('express-flash');
const session = require('express-session');
const db = require("./db");
const user = require("./models/Usuario")
const {body, validationResult} = require('express-validator')


app.use(session({
  secret: 'DRLX',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

const usuariosRoutes = require('./routes/usuariosRoutes');
app.use(usuariosRoutes);

const clientesRoutes = require("./routes/clientesRoutes");
app.use(clientesRoutes);

const loginRoutes = require("./routes/loginRoutes");
app.use(loginRoutes);

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

app.post("/crearUsuario", [
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

app.post('/authenticate', (req, res) => {
  const { username, password } = req.body;

  user.findOne({ username })
    .then(user => {
      if (!user) {
        res.status(500).send("No existe");
      } else {
        user.isCorrectPassword(password, (err, result) => {
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
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
