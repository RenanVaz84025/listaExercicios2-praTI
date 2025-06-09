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