const botao = document.querySelector('.botao-receita')

botao.addEventListener('click', function(event){
    event.preventDefault()
    var campoNome = document.querySelector('#nome-comentario')
    var campoEmail = document.querySelector('#email-comentario')
    var campoComentário = document.querySelector('#comentario')

    var section = document.querySelector('section#comentarios')
    const form = document.querySelector('#form-comentario')

    var nome = campoNome.value 
    var email = campoEmail.value
    var comentario = campoComentário.value

    section.classList.remove('disabled')

    var p1 = document.createElement('p')
    p1.classList.add('info-adicionado')

    var p2 = document.createElement('p')
    p2.classList.add('comentario-adicionado-descricao')

    const div = document.createElement('div')
    div.classList.add('comentario-adicionado')

    const data = new Date()
    var dia = String(data. getDate()). padStart(2, '0');
    var mes = String(data. getMonth() + 1). padStart(2, '0');
    var ano = data.getFullYear()

    p1.innerHTML = `<span>${nome}</span> no dia ${dia}/${mes}/${ano}`
    div.appendChild(p1)

    p2.innerHTML = comentario
    div.appendChild(p2)

    section.appendChild(div)

    campoNome.value = ""
    campoEmail.value = ""
    campoComentário.value = ""
})