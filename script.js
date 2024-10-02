// crie uma lista com 5 nomes usando while


let numeroDeVezes = 0


while (numeroDeVezes < 5) {
    console.log(`"Passou aqui " ${numeroDeVezes}`)
    numeroDeVezes = numeroDeVezes + 1
}

let lista = ['morango', 'banana', 'kiwi', 'maça', 'laranja']

let posicao = 0
const listaEmTela = document.createElement("ol")
while (p
    osicao < lista.length) {

    console.log(lista[posicao])
    const itemLista = document.createElement("li")
    itemLista.textContent = lista[posicao]
    itemLista.appendChild(itemLista)
    posicao = posicao + 1
}

document.body.appendChild(listaEmTela)
