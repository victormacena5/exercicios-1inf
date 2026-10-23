const prompt = require("prompt-sync")()

// RF01 - Dados da semana
const quantidadeDeDias = Number(prompt("Quantidade de dias: "))
const metaDiaria = Number(prompt("Meta diária: "))
const metaSemanal = Number(prompt("Meta semanal: "))

// RF02 - Total vendido na semana
let totalVendido = 0
let diasAcimaDaMeta = 0
let melhorDia = 0

for (let dia = 1; dia <= quantidadeDeDias; dia++) {
    const venda = Number(prompt(`Venda do dia ${dia}: `))

    totalVendido += venda

    // RF04 - Dias acima ou iguais à meta diária
    if (venda >= metaDiaria) {
        diasAcimaDaMeta++
    }

    // RF05 - Melhor dia de vendas
    if (venda > melhorDia) {
        melhorDia = venda
    }
}

// RF03 - Média de vendas por dia
const mediaVendas = totalVendido / quantidadeDeDias

// RF06 - Situação da semana
const situacaoSemana = totalVendido >= metaSemanal
    ? "Meta semanal atingida"
    : "Meta semanal não atingida"

// Resumo utilizando template string
const resumo = `
----- RELATÓRIO DE VENDAS DA PAPELARIA -----
Total vendido: ${totalVendido}
Média: ${mediaVendas}
Dias acima da meta: ${diasAcimaDaMeta}
Melhor dia: ${melhorDia}
${situacaoSemana}
`

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
