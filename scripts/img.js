const botao = document.getElementById('maisFotos')
const container = document.getElementById('imagens')
const botao2 = document.getElementById('menosFotos')
const totImagens = container.querySelectorAll('img')

botao.addEventListener('click', mostraImagens)
botao2.addEventListener('click', esconderImagens)

function mostraImagens() {
    botao.classList.add("sumir")
    totImagens.forEach(function (elemento) {
        elemento.classList.remove("sumir")
    })
    botao2.classList.remove("sumir")
}

function esconderImagens() {
    botao2.classList.add('sumir')
    for (let i = 2; i < totImagens.length; i++) {
        totImagens[i].classList.add('sumir')
    }
    botao.classList.remove('sumir')
}