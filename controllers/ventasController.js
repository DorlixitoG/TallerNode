const Venta = require("../models/venta");
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();

// Ruta para obtener la lista de las ventas
module.exports.getVentas = async (req, res) => {
  try {
    const Ventas = await Venta.find({});
    res.render("ventas", { Ventas });
  } catch (error) {
    res.status(500).send("Error al obtener la lista de las ventas");
  }
};

// Crear una nueva venta
module.exports.crearVenta = async (req, res) => {
  try {
    const { nombre, fecha, total } = req.body;

    const nuevaVenta = new Venta({ nombre, fecha, total });
    await nuevaVenta.save();
    res.redirect("Ventas");
  } catch (err) {
    res.status(500).send("Error al obtener la lista de las ventas");
  }
};

// Editar una venta
module.exports.editarVenta = async function (req, res) {
  const id = req.body.id_editar;
  const nombre = req.body.nombre_editar;
  const fecha = req.body.fecha_editar;
  const total = req.body.total_editar;
  try {
    await Venta.findByIdAndUpdate(id, { nombre, fecha, total });
    res.redirect("/ventas");
  } catch (error) {
    console.log(error);
  }
};

// Borrar una venta
module.exports.borrar = async function (req, res) {
  const id = req.params.id;
  try {
    await Venta.findByIdAndDelete(id);
    res.redirect("/ventas");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al borrar la venta.");
  }
};
