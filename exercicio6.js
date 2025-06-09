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