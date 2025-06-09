/* 8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total. */

const vendas = [
  { cliente: "Aline", total: 50 },
  { cliente: "Renan", total: 30 },
  { cliente: "Aline", total: 70 },
  { cliente: "Renan", total: 20 },
  { cliente: "Pietra", total: 100 }
];

function agruparCliente(vendas) {
  return vendas.reduce((acumulador, venda) => { // Reduce percorre o array e acumula os valores por cliente
    acumulador[venda.cliente] = (acumulador[venda.cliente] || 0) + venda.total
    return acumulador
  }, {});
}

console.log(agruparCliente(vendas))

