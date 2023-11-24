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

const comprasRoutes = require("./routes/comprasRoutes");
app.use(comprasRoutes);

const proveedoresRoutes = require("./routes/proveedoresRoutes");
app.use(proveedoresRoutes);


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


app.get("/compras", (req, res) => {
  res.render("compras", {});
});

app.get("/proveedores", (req, res) => {
  res.render("proveedores", {});
});


app.post("/crearCompra", [
  body('proveedor', 'Ingrese un nombre valido')
  .exists()
  .isLength({min:5}),
  body('fecha','Ingrese una fecha válida')
  .exists()
  .isDate(),
  body('password', 'Ingrese una contraseña')
  .exists()
  .isNumeric(),
], (req, res)=>{
ia
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
      console.log(req.body)
      const valores = req.body
      const validaciones=errors.array()
      res.render('compras',{validaciones:validaciones, valores})
      res.redirect("/compras");
  }else{
      res.send('!Validacion Exitosa!')
  }
})


app.listen(5000, () => {
  console.log("Server started on port 5000");
});
