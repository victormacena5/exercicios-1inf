const prompt = require("prompt-sync")()

const nomeTurno = prompt("Digite o nome do turno: ")
const meta = Number(prompt("Digite a meta de produção: "))
const producaoInicial = Number(prompt("Digite a produção inicial: "))
const pecasPorCaixa = Number(prompt("Digite quantos itens cabem em uma caixa: "))

const producaoFinal = producaoInicial

while (producaoFinal < meta){
    producaoFinal++
}


let situacaoMeta = producaoFinal >= meta ? "Meta atingida" : "Meta não atingida"

const resumo = `
===== RESUMO DO TURNO =====
Nome do turno: ${nomeTurno}
Produção final: ${producaoFinal}
Caixas necessárias: ${caixasNecessarias}
Situação da meta: ${situacaoMeta}
===========================
`

console.log(resumo)

module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}
