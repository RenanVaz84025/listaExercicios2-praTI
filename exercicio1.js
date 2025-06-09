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
