const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String, required: true },
  documento: { type: String, required: true },
});

const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;
