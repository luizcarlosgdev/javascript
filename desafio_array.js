
/* function sum(){
    const args = Array.from(arguments)
    const soma = args.reduce(function (acc, value){
        return acc + value
    })

    console.log(soma)
}

sum(1, 7, 5, 4) */

/* function sum(arr){
    const soma = arr.reduce(function (acc, value){
        return acc + value
    })
    
    console.log(soma)
}


const numbers = [1, 7, 5, 4]
sum(numbers) */


const numbers = [1, 7, 5, 4]

function average(...arr){
    const tamanho = arr.length

    const soma = arr.reduce(function (acc, value){
        return acc + value
    })

    const resultado = soma / tamanho
    
    return resultado
}

console.log(average(...numbers))