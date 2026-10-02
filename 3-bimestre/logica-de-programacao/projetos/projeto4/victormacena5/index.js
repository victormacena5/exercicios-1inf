// PROJETO 4 - SISTEMA DE PEDIDOS DE UMA SORVETERIA

// RF01 - Registro do pedido
const cliente = "Elisa Tavares";
const opcaoMenu = 3;
const quantidade = 4;
const formaPagamento = "pix";
const statusPedido = "enviado";

// RF02 - Identificação do item
let prato;

switch (opcaoMenu) {
    case 1:
        prato = "Casquinha";
        break;
    case 2:
        prato = "Milkshake";
        break;
    case 3:
        prato = "Sundae";
        break;
    case 4:
        prato = "Picolé";
        break;
    default:
        prato = "Opção inválida";
}

// RF03 - Preço unitário
let precoUnitario;

switch (opcaoMenu) {
    case 1:
        precoUnitario = 7;
        break;
    case 2:
        precoUnitario = 18;
        break;
    case 3:
        precoUnitario = 16;
        break;
    case 4:
        precoUnitario = 5;
        break;
    default:
        precoUnitario = 0;
}

// RF04 - Cálculo do subtotal
const subtotal = precoUnitario * quantidade;

// RF05 - Frete
const freteGratis = subtotal >= 40;

const freteStatus = freteGratis
    ? "Frete grátis"
    : "Frete pago";

const frete = freteGratis
    ? 0
    : 10;

// RF06 - Mensagem da forma de pagamento
let pagamentoMensagem;

switch (formaPagamento) {
    case "pix":
        pagamentoMensagem = "Pagamento via PIX";
        break;
    case "cartao":
        pagamentoMensagem = "Pagamento via cartão";
        break;
    case "dinheiro":
        pagamentoMensagem = "Pagamento em dinheiro";
        break;
    default:
        pagamentoMensagem = "Forma de pagamento inválida";
}

// RF07 - Desconto e total
let descontoPercentual;

switch (formaPagamento) {
    case "cartao":
    case "dinheiro":
        descontoPercentual = 10;
        break;
    case "pix":
        descontoPercentual = 0;
        break;
    default:
        descontoPercentual = 0;
}

const desconto = subtotal * descontoPercentual / 100;
const total = subtotal - desconto + frete;

// RF08 - Situação do pedido
let statusMensagem;

switch (statusPedido) {
    case "pendente":
        statusMensagem = "Aguardando pagamento";
        break;
    case "aprovado":
        statusMensagem = "Pedido em preparo";
        break;
    case "enviado":
        statusMensagem = "Pedido a caminho";
        break;
    case "cancelado":
        statusMensagem = "Pedido cancelado";
        break;
    default:
        statusMensagem = "Status desconhecido";
}

// RF09 - Resumo do pedido
const resumo = `
===== RESUMO DO PEDIDO =====
Cliente: ${cliente}
Item: ${prato}
Quantidade: ${quantidade}
Preço unitário: R$ ${precoUnitario.toFixed(2)}
Subtotal: R$ ${subtotal.toFixed(2)}
Frete: ${freteStatus}
Valor do frete: R$ ${frete.toFixed(2)}
Pagamento: ${pagamentoMensagem}
Desconto: R$ ${desconto.toFixed(2)}
Total: R$ ${total.toFixed(2)}
Status: ${statusMensagem}
============================
`;

// Exportação das variáveis para os testes
module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
};
