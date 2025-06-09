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