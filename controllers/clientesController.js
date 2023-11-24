const Cliente = require("../models/Cliente");

exports.getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.render("clientes", { clientes });
  } catch (error) {
    res.status(500).send("Error al obtener la lista de clientes");
  }
};

exports.agregarCliente = async (req, res) => {
  const { nombre, direccion, telefono, documento } = req.body;

  try {
    const cliente = new Cliente({ nombre, direccion, telefono, documento });
    await cliente.save();
    res.redirect("/clientes");
  } catch (error) {
    res.status(500).send("Error al agregar un nuevo cliente");
  }
};
