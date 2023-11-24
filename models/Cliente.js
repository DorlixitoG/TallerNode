const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: Number, required: true },
  documento: { type: Number, required: true },
});

const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;
