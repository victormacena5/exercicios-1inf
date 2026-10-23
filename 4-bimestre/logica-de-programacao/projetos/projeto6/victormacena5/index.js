const prompt = require("prompt-sync")()


const quantidadeDeDias = Number(prompt("Quantidade de dias: "))
const metaDiaria = Number(prompt("Meta diária: "))
const metaSemanal = Number(prompt("Meta semanal: "))

let totalVendido = 0

let diasAcimaDaMeta = 0


let melhorDia = 0

for (let dia = 1; dia <= quantidadeDeDias; dia++) {
    const venda = Number(prompt(`Venda do dia ${dia}: `))

    totalVendido += venda

    
    if (venda >= metaDiaria) {c
        diasAcimaDaMeta++
    }

    
    if (venda > melhorDia) {
        melhorDia = venda
    }
}

const mediaVendas = totalVendido / quantidadeDeDias;

const situacaoSemana =
    totalVendido >= metaSemanal
        ? "Meta semanal atingida"
        : "Meta semanal não atingida"


const resumo = `Total vendido: ${totalVendido}
Média diária: ${mediaVendas}
Dias acima da meta: ${diasAcimaDaMeta}
Melhor dia de vendas: ${melhorDia}
Situação da semana: ${situacaoSemana}`

console.log(resumo);


const prompt = require("prompt-sync")()


const quantidadeDeDias = Number(prompt("Quantidade de dias: "))
const metaDiaria = Number(prompt("Meta diária: "))
const metaSemanal = Number(prompt("Meta semanal: "))


let totalVendido = 0
let diasAcimaDaMeta = 0

let melhorDia = 0

for (let dia = 1; dia <= quantidadeDeDias; dia++) {
    const venda = Number(prompt(`Venda do dia ${dia}: `));

    totalVendido += venda;

   
    if (venda >= metaDiaria) {
        diasAcimaDaMeta++
    }


    if (venda > melhorDia) {
        melhorDia = venda
    }
}


const mediaVendas = totalVendido / quantidadeDeDias

const situacaoSemana =
    totalVendido >= metaSemanal
        ? "Meta semanal atingida"
        : "Meta semanal não atingida"

// RF06 — Resumo
const resumo = `Total vendido: ${totalVendido}
Média diária: ${mediaVendas}
Dias acima da meta: ${diasAcimaDaMeta}
Melhor dia de vendas: ${melhorDia}
Situação da semana: ${situacaoSemana}`

console.log(resumo)

// Exportação para os testes automáticos
module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
};
