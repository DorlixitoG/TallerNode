const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  fecha: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
});

const Venta = mongoose.model('Venta', ventaSchema);

module.exports = Venta;
