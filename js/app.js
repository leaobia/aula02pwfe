'use strict'

const adicionar = document.getElementById('adicionar')

/*const adicionarCard = () =>{
    const container = document.getElementById('container')
    //container.textContent = 'SENAI'
    container.innerHTML = container.innerHTML + '<div class = "item"></div>'
}*/

// Essa função abaixo não precisa reescrever html, é mais seguro

const adicionarCard = (aluno) => {

    const container = document.getElementById('container')
    var novaDiv = document.createElement('div')

    if (aluno.nota == '' || aluno.nome == '') {
        alert('Entradas vazias!')
    } else if (isNaN(aluno.nota)) {
        alert('Digite números!')
    } else if (aluno.nota > 10 || aluno.nota < 0) {
        alert('Notas de 0 a 10!')
    } else if (aluno.nota == null || aluno.nome == null) {
        alert('Está nulo!!')
    } else if (/[0-9]/.test(aluno.nome)) {
        alert('Nome deve ser contido de apenas letras')
    } else if (!isNaN(aluno.nome)) {
        alert('Nome deve ser contido de apenas letras')
    }

    else {
        if (aluno.nota >= 5) {
            novaDiv.classList.toggle('notaAzul')
        } else {
            novaDiv.classList.add('notaVermelha')
        }
        novaDiv.innerHTML = `<h2 class = "aluno_aluno">${aluno.nome}</h2>
                         <span class = "aluno_nota">${aluno.nota}</span>`
        container.appendChild(novaDiv)
    }
}

const handleClick = () => {

    const aluno = {
        nome: prompt('Digite o nome do aluno'),
        nota: prompt('Digite sua nota')
    }

    adicionarCard(aluno)
}

adicionar.addEventListener('click', handleClick)