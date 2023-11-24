const Producto = require("../models/producto");

//Mostrar

module.exports.mostrar = async function mostrar(req, res) {
  const productos = await Producto.find({});
  return res.render("productos", { productos: productos });
};

module.exports.crear = async function crear(req, res) {
  try {
    const producto = await new Producto({
      nombre: req.body.nombre,
      precio: req.body.precio,
      cantidad: req.body.cantidad,
      color: req.body.color,
      talla: req.body.talla,
    });

    if(req.file){
      const {filename} = req.file
      producto.setImgUrl(filename)
    }

    producto.save();
    res.redirect("/productos");
    console.log(req.file);
  } catch (error) {
    console.log(error);
  }
};

module.exports.editar = async function editar(req, res) {
  const id = req.body.id_editar;
  const nombre = req.body.nombre_editar;
  const precio = req.body.precio_editar;
  const cantidad = req.body.cantidad_editar;
  const color = req.body.color_editar;
  const talla = req.body.talla_editar;
  try {
    await Producto.findByIdAndUpdate(id, { nombre,precio,cantidad,color,talla });
    res.redirect("/productos");
  } catch (error) {
    console.log(error);
  }
};

module.exports.borrar=async function borrar(req,res){
  const id=req.params.id
  try {
    await Producto.findByIdAndDelete(id)
    res.redirect("/productos")
  } catch (error) {
    console.log(error);
  }
}