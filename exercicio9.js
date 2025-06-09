/* 9. Conversão Entre Formatos
Escreva duas funções:
○ paresParaObjeto(pares) recebe um array de pares [ [chave,
valor], … ] e retorna o objeto equivalente.
○ objetoParaPares(obj) faz o inverso, retornando um array de
pares. */

function paresParaObjeto(pares) {
  return Object.fromEntries(pares) // Transforma um array de pares em um objeto.

}

function objetoParaPares(obj) {
  return Object.entries(obj) // Faz o inverso converte um objeto em um array de pares.
}

console.log(paresParaObjeto([["nome", "Aline"], ["idade", 36]]))

console.log(objetoParaPares({ nome: "Aline", idade: 36 }))

