/* 7. Mapeamento e Ordenação Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array 
apenas com os nomes, ordenados por preço crescente, usando map, sort. */

const produtos = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Mouse", preco: 100 },
  { nome: "Impressora", preco: 900 }
];

function ordenarPorPreco(produtos) {
    return produtos.sort((a, b) => a.preco - b.preco).map(p => p.nome)

//   return produtos
//     .sort((a, b) => a.preco - b.preco) // Ordena os produtos pelo preço crescente
//     .map(produto => produto.nome); // Mapeia apenas os nomes dos produtos
}

console.log(ordenarPorPreco(produtos)); 
