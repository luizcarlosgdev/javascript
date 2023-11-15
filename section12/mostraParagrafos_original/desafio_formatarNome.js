const user = "Luiz Carlos Gonçalves   "

/* function formatarNome(nameUser){
  nameUser = nameUser.trim()
  let primeiroEspaco = nameUser.indexOf(" ")
  if(primeiroEspaco < 0){
    return nameUser
  }

  const primeiroNome = nameUser.slice(0, primeiroEspaco)
  const sobreNome = nameUser.slice(primeiroEspaco + 1)

  return `${sobreNome} ${primeiroNome}`
}
 */

function formatarNome(nameUser){
  nameUser = nameUser.trim()

  const nameSeparado = nameUser.split(" ")
  if(nameSeparado.length === 1){
    return nameUser
  }

  const primeiroNome = nameSeparado.shift()
  return `${nameSeparado.join(" ")}, ${primeiroNome}`
}

console.log(formatarNome(user))