const mongoose = require("mongoose");

const compraSchema = new mongoose.Schema({
  proveedor: { type: String, required: true },
  fecha: { type: Date, required: true },
  total: { type: Number, required: true },
});

const Compra = mongoose.model("compras", compraSchema);

module.exports = Compra;
