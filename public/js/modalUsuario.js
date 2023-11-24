const modalUsuarioEditar = new bootstrap.Modal(document.getElementById('modalUsuarioEditar'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    usuario_editar.value = fila.children[1].innerHTML
    email_editar.value = fila.children[2].innerHTML
    modalUsuarioEditar.show()
})
