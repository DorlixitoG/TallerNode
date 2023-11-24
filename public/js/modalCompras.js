const modalCompraEditar = new bootstrap.Modal(document.getElementById('modalCompraEditar'))
const on2 = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on2(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    proveedor_editar.value = fila.children[1].innerHTML
    fecha_editar.value = fila.children[2].innerHTML
    total_editar.value = fila.children[3].innerHTML
    modalCompraEditar.show()
})

