let numerosRepetidos = [1, 2, 8, 9, 3, 4, 1, 2, 3, 5, 6, 5, 7, 10]

let numeros = numerosRepetidos.reduce(function (acc, numAtual){
    if(acc.indexOf(numAtual) === -1){
        acc.push(numAtual)
    }

    return acc
}, [])

console.log("novo array sem números repetidos: " + numeros.join(", "))