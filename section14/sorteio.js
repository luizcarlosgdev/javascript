function getRandomNumber(inicio = 0, fim = 10, integer = true){

  const r = Math.random() * (fim - inicio) + inicio

  return integer ? parseInt(r) : r
}

console.log(getRandomNumber(5, 15))