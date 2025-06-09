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
