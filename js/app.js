'use strict'

const adicionar = document.getElementById('adicionar')

/*const adicionarCard = () =>{
    const container = document.getElementById('container')
    //container.textContent = 'SENAI'
    container.innerHTML = container.innerHTML + '<div class = "item"></div>'
}*/

// Essa função abaixo não precisa reescrever html, é mais seguro

const adicionarCard = (nome, nota) => {

    const container = document.getElementById('container')
    var novaDiv = document.createElement('div')

    if (nota == '' || nome == '') {
        alert('Entradas vazias!')
    } else if (isNaN(nota)) {
        alert('Digite números!')
    } else if (nota > 10 || nota < 0) {
        alert('Notas de 0 a 10!')
    } else if (nota == null || nome == null) {
        alert('Está nulo!!')
    } else if ( /[0-9]/.test(nome)) {
        alert('Nome deve ser contido de apenas letras')
    }else if(!isNaN(nome)){
        alert('Nome deve ser contido de apenas letras')
    }

    else {
        if (nota >= 5) {
            novaDiv.classList.toggle('notaAzul')
        } else {
            novaDiv.classList.add('notaVermelha')
        }
        novaDiv.innerHTML = `<h2 class = "aluno_aluno">${nome}</h2>
                         <span class = "aluno_nota">${nota}</span>`
        container.appendChild(novaDiv)
    }
}

const handleClick = () => {
    const nome = prompt('Digite o nome do aluno')
    const nota = prompt('Digite sua nota')

    adicionarCard(nome, nota)
}

adicionar.addEventListener('click', handleClick)