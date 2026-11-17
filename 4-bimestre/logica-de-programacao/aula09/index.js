const prompt = require("prompt-sync")()

const quantidade = Number(prompt("Quantas vendas? "))
const vendasDaSemana = []


for (let i = 1; i <= quantidade; i++) {
  vendasDaSemana.push(Number(prompt(`Venda ${i}: `)))
}

let menorVenda = vendasDaSemana[0]

for (let i = 0; i < vendasDaSemana.length; i++) {
  if (vendasDaSemana[i] < menorVenda) {
    menorVenda = vendasDaSemana[i]
  }
}

console.log("Menor venda registrada:", menorVenda)

module.exports = menorVenda
