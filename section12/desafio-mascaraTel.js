let numeroTel = "(37) 9928-4682"

function mascararTel(numero){
  const hiffenIndice = numero.indexOf("-")
  const numerosInicio = numero.slice(0, hiffenIndice)
  const numerosFinal = numero.slice(hiffenIndice + 1)
  return console.log(`${numerosInicio.slice(0, -2).padEnd(numerosInicio.length, '*')}-${numerosFinal.slice(2).padStart(numerosFinal.length, '*')}`)
}

mascararTel(numeroTel)