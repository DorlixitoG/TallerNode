const modalVentaEditar = new bootstrap.Modal(document.getElementById('modalVentaEditar'))
const on5 = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on5(document, 'click', '.btnEditarV', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    nombre_editar.value = fila.children[1].innerHTML
    fecha_editar.value = fila.children[2].innerHTML
    total_editar.value = fila.children[3].innerHTML
    modalVentaEditar.show()
})