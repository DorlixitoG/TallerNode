const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const app = express();
const flash = require('express-flash');
const session = require('express-session');
const db = require("./db");
const user = require("./models/Usuario");
const port = 3005;

app.use(session({
  secret: 'DRLX',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));


// Establecer la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'storage')));


//llamar a la ruta para los metodos crud
const productos = require('./routes/productosRoutes');
app.use(productos);

const usuariosRoutes = require('./routes/usuariosRoutes');
app.use(usuariosRoutes);


const ventasRoutes = require('./routes/ventasRoutes');
app.use(ventasRoutes);

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

app.get("/clientes", (req, res) => {
  res.render("clientes", {});
});


app.get("/compras", (req, res) => {
  res.render("compras", {});
});

app.get("/proveedores", (req, res) => {
  res.render("proveedores", {});
});



app.get("/ventas", (req, res) => {
  res.render("ventas", {});
});


app.get("/productos", (req, res) => {
  res.render("productos", {});
});



app.listen(port, () => {
  console.log("Server started on port ",port);
});
