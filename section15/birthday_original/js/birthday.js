function quantoFaltaPara(m, d) {
  const today = new Date()
  today.setHours(0)
  today.setMinutes(0)
  today.setSeconds(0)
  today.setMilliseconds(0)
  
  let anoAtual = today.getFullYear()

  const dateNiver = new Date(anoAtual, m - 1, d)

  const dateAtualTS = +today
  let dateNiverTS = +dateNiver

  if(dateNiverTS < dateAtualTS){
  //dateNiverTS for maior, aniversário já passou
  dateNiver.setFullYear(++anoAtual)
  dateNiverTS = +dateNiver
  }

  const ONE_DAY = 24 * 60 * 60 * 1000

  const diferenca = dateNiverTS - dateAtualTS
  return diferenca / ONE_DAY
}
