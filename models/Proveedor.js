const mongoose = require("mongoose");

const proveedorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  cedula: { type: Number, required: true },
  telefono: { type: Number, required: true },
  direccion: { type: String, required: true },
});

const Proveedor = mongoose.model("proveedores", proveedorSchema);

module.exports = Proveedor;
