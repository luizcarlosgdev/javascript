let nomes = ["Daniel", "Luiz", "Tamara", "Daciolo"]

let contadorNomes = nomes.reduce(function (testeAcc, nomeAtual) {
    /* a primeira iteração testeAcc recebeu um objeto vazio e nomeAtual recebeu Daniel */
    
    let primeiraLetra = nomeAtual[0]

    if(testeAcc[primeiraLetra]){
        testeAcc[primeiraLetra]++
    }else {
        testeAcc[primeiraLetra] = 1
    }

    return testeAcc
}, {})

console.log(contadorNomes)