const Compra = require("../models/Compra");

module.exports.getCompra = async (req, res) => {
    try {
      const compras = await Compra.find();
      res.render("compras", { compras });
    } catch (error) {
      res.status(500).send("Error al obtener la lista de compra");
    }
  };

  module.exports.crearCompra =
  async function crear(req, res){
      try{
          const compra = await new Compra({
              proveedor: req.body.proveedor,
              fecha: req.body.fecha,
              total: req.body.total,

          })
          compra.save()
          res.redirect('/compras')
      }catch (error){
          console.log(error)
      }
  }

  module.exports.editarCompra = 
async function editar(req, res){
    const id = req.body.id_editar
    const proveedor = req.body.proveedor_editar
    const fecha = new Date(req.body.fecha_editar);
    const total = req.body.total_editar


    try {
        await Compra.findByIdAndUpdate(id, {proveedor,fecha,total})
        res.redirect('/compras')
    } catch (error){
        console.log(error)
    }
}

module.exports.borrarCompra =
async function borrar(req, res){
    const id =req.params.id;
    try {
        await Compra.findByIdAndDelete(id)
        res.redirect('/compras')
    } catch (error){
        console.log(error)
    }
}
