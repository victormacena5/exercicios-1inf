const prompt = require("prompt-sync")()

const calcularSubtotal = (preco, quantity) => preco * quantity

const calcularTotalComFrete = (preco, quantity, frete) => {
    const subtotal = calcularSubtotal(preco, quantity)
    return subtotal + frete;
};

const preco = Number(prompt("Preço do produto: "))
const quantidade = Number(prompt("Quantidade: "))
const frete = Number(prompt("Valor do frete: "))

const total = calcularTotalComFrete(preco, quantidade, frete)

console.log("Total:", total)

module.exports = total
