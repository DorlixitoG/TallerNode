const modalAlumno = new bootstrap.Modal(document.getElementById('modalAlumno'))
const on101 = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on101(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    nombre_editar.value = fila.children[1].innerHTML
    precio_editar.value = fila.children[2].innerHTML
    cantidad_editar.value = fila.children[3].innerHTML
    imagen_editar.value = fila.children[4].innerHTML
    color_editar.value = fila.children[5].innerHTML
    talla_editar.value = fila.children[6].innerHTML
    modalAlumno.show()
})