/*
    mostrar o nome do mes com base no numero do mesmo!

*/

const nomesMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]

const mes = prompt("Informe o mes")
const numeroMes = Number(mes)

let mensagem = "Mês Inválido"
if ((numeroMes != NaN) && (numeroMes > 0) && (numeroMes <= 12)) {
    mensagem = `${nomesMeses[numeroMes - 1]} é o mes de número ${numeroMes}`
} else {
    for (let index = 0; index < nomesMeses.length; index++) {
        if (mes.toLowerCase() === nomesMeses[index].toLowerCase()) {
            mensagem = `${mes} é o mes de numero ${index + 1}`
            break
        }
    }
}
console.log(mensagem)
