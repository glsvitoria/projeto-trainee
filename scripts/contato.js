var botaoEnviar = document.querySelector('#enviar')

botaoEnviar.addEventListener("click", function(event){
    event.preventDefault()
    var campoNome = document.querySelector('#nome')
    var campoEmail = document.querySelector('#email')
    var campoAssunto = document.querySelector('#assunto')
    var campoComentario = document.querySelector('#comentario')

    if(campoNome.value == 0 || campoEmail.value == 0 || campoAssunto.value == 0 || campoComentario.value == 0){
    } else {
        var feedback = document.querySelector('.feedback-overlay')

        feedback.classList.add('ativo')
    }
})

function fechar_feedback(){
    var feedback = document.querySelector('.feedback-overlay')

    feedback.classList.remove('ativo')

    var form = document.querySelector('#formulario')

    document.form.submit()
}