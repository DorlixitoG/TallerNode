const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const app = express();

const User = require('./models/usuario')


const db =require('./db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

// Configurar el motor de plantillas (usando EJS)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.render("login", {});
});

app.get("/", (req, res) => {
  res.redirect("/usuarios");
});

app.get("/usuarios", (req, res) => {
  res.render("usuarios", {});
});

app.get('/index', (req, res) => {
  res.render('index', {}); 
});

app.get('/index', (req, res) => {
  res.redirect('index', {}); 
});


app.post('/usuarios', (req, res) => {
  const {username,email,password} = req.body

  const user = new User({ username,email,password })

  user.save()
  .then(() => {
    res.redirect("/login");
  })
  .catch(err => {
    res.status(500).send("error al ingresar los datos");
  });
})

app.post('/authenticate', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
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