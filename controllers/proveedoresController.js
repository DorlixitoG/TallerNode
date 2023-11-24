const Proveedor = require("../models/Proveedor");

module.exports.getProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.find();
    res.render("proveedores", { proveedores });
  } catch (error) {
    res.status(500).send("Error al obtener la lista de clientes");
  }
};



module.exports.crearProveedor =
async function crear(req, res){
    try{
        const proveedor = await new Proveedor({
            nombre: req.body.nombre,
            cedula: req.body.cedula,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
        })
        proveedor.save()
        res.redirect('/proveedores')
    }catch (error){
        console.log(error)
    }
}

module.exports.editarProveedor = 
async function editar(req, res){
    const id = req.body.id_editar
    const nombre = req.body.nombres_editar
    const cedula = req.body.cedula_editar
    const telefono = req.body.telefono_editar
    const direccion = req.body.direccion_editar



    try {
        await Proveedor.findByIdAndUpdate(id, {nombre, cedula,telefono,direccion})
        res.redirect('/proveedores')
    } catch (error){
        console.log(error)
    }
}

module.exports.borrarProveedores =
async function borrar(req, res){
    const id =req.params.id;
    try {
        await Proveedor.findByIdAndDelete(id)
        res.redirect('/proveedores')
    } catch (error){
        console.log(error)
    }
}