const modalProveedorEditar = new bootstrap.Modal(document.getElementById('modalProveedorEditar'))
const on3 = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on3(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    nombres_editar.value = fila.children[1].innerHTML
    cedula_editar.value = fila.children[2].innerHTML
    telefono_editar.value = fila.children[3].innerHTML
    direccion_editar.value = fila.children[4].innerHTML
    modalProveedorEditar.show()
})

