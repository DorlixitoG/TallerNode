const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const app = express();

const User = require('./models/user')


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
  res.redirect("/registrar");
});

app.get("/registrar", (req, res) => {
  res.render("registrar", {});
});


app.post('/register', (req, res) => {
  const {username,email,password} = req.body

  const user = new User({ username,email,password })

  user.save()
  .then(() => {
    res.redirect("/login");
  })
  .catch(err => {
    res.status(500).send("error pa");
  });
})

app.post('/authenticate', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then(user => {
      if (!user) {
        res.status(500).send("No existe pa");
      } else {
        user.isCorrectPassword(password, (err, result) => {
          if (err) {
            res.status(500).send("Error autenticando");
          } else if (result) {
            res.status(200).send('Correctamente opapep pa');
          } else {
            res.status(500).send("Incorrecto alguito pa");
          }
        });
      }
    })
    .catch(err => {
      res.status(500).send("Error pa");
    });
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});