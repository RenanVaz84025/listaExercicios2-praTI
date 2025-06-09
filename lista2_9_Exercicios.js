/* 1. Validação de Datas Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real
(meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário. */

function ehDataValida(dia, mes, ano) {
    let data = new Date(ano, mes - 1, dia) // Criação do objeto date 
    return data.getDate() === dia && data.getMonth() === mes - 1 && data.getFullYear() === ano
}

console.log(ehDataValida(29, 2, 2028)) // true (ano bissexto)
console.log(ehDataValida(29, 2, 2024)) // true (ano bissexto)
console.log(ehDataValida(31, 4, 2025)) // false (abril tem 30 dias)
console.log(ehDataValida(8, 12, 2025)) // true (data válida)

/* 2. Jogo de Adivinhação Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. 
Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” 
a cada palpite errado. */
const prompt = require("prompt-sync")()

let numeroSecreto = Math.floor(Math.random() * 100) + 1 // Número aleatório entre 1 e 100
let tentativa = 0; // Número de tentativas

while (true) {   
    let palpite = Number(prompt("Adivinhe o número (entre 1 e 100): "))
    
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        console.log("Por favor, insira um número válido entre 1 e 100.")
        continue // Volta para o início do loop
    }
    tentativa++

    if (palpite === numeroSecreto) {
    console.log(`Parabéns! Você acertou em ${tentativa} tentativas.`)
        break; // Sai do loop
    } else if (palpite < numeroSecreto) {
        console.log("Mais alto!") // Dica se o número for maior
    } else {
        console.log("Mais baixo!") // Dica se o número for menor
    }
}

/* 3. Palavras Únicas Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as 
palavras únicas e exibi-las em um array. */

let frase = ('Olá Mundo Bom dia Tudo Bem')
let palavras = frase.split(' ')

let palavrasUnicas = []

for(let i = 0; i < palavras.length; i++) {
    if(palavrasUnicas.indexOf(palavras[i]) === -1) {
        palavrasUnicas.push(palavras[i])
    }
}

console.log(palavrasUnicas)

/* 4. Fatorial Recursivo Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1. */

function fatorial(n) {    
    if (n < 0) {
        throw new Error("O número não pode ser negativo.")
    } 
 
    if (n === 0) {
        return 1
    }
   
    return n * fatorial(n - 1)
}

console.log(fatorial(5)) 

/* 5. Debounce Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa
 fn se não for chamada novamente dentro  do intervalo. */

 function debounce(fn, delay) {
    let timer = null

    return function (...args) {        
        clearTimeout(timer)
        
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

function logarMensagem(mensagem) {
    console.log(mensagem)
}

const debounceLog = debounce(logarMensagem, 500)

debounceLog("Executado!")

/* 6. Memoization Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), 
retornando resultados instantâneos em repetidas invocações */

function memoize(fn) {
    const cache = new Map()  // Cria um cache (memória) para guardar resultados

    return function(...args) {  // Retorna uma nova função
        const key = JSON.stringify(args)  // Cria uma chave com os argumentos da função

        if(cache.has(key)) {  // Se já calculou antes...
            return cache.get(key)  // ...pega do cache e retorna
        }

        const result = fn.apply(this, args)  // Se não, calcula normalmente
        cache.set(key, result)  // Guarda o resultado no cache
        return result  // Retorna o resultado
    }
}

function fibonacci(n) {
    if(n < 2) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
}

const fastFib = memoize(function fibonacci(n){
    if(n < 2) return n
    return fastFib(n - 1) + fastFib(n - 2)
})

console.log(fastFib(45))
console.log(fibonacci(45))

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

console.log(ordenarPorPreco(produtos))

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
