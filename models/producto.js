const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productoSchema = new Schema ({
    nombre: String,
    precio: Number,
    cantidad: Number,
    imagen: String,
    color: String,
    talla: String
}, {versionKey:false})

productoSchema.methods.setImgUrl = function setImgUrl (filename){
    this.imagen= `http://localhost:3005/${filename}`
}


module.exports = mongoose.model('productos', productoSchema)