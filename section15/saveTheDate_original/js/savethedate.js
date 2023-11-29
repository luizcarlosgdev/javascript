;(function(){
  
  const dateEventDom = document.querySelector(".hero-content h1 span").innerText
  const dateEvent = getDate(dateEventDom)

  const divContagem = document.querySelector(".hero-content")
  const p = document.createElement("p")
  divContagem.appendChild(p)

  const ONE_MINUTE =  60 * 1000
  const ONE_HOUR = 60 * ONE_MINUTE
  const ONE_DAY = 24 * ONE_HOUR

  function updateDate(){
    const today = new Date()
    let left = dateEvent.getTime() - today.getTime()  

    const daysLeft = parseInt(left / ONE_DAY)
    left = left - daysLeft * ONE_DAY

    const hourLeft = parseInt(left / ONE_HOUR)
    left = left - hourLeft * ONE_HOUR

    const minuteLeft = parseInt(left/ONE_MINUTE)
    left = left - minuteLeft * ONE_MINUTE

    const secondsLeft = parseInt(left/1000)
    formatDate(daysLeft, hourLeft, minuteLeft, secondsLeft)
  }
  updateDate()

  setInterval(updateDate, 1000)
  
  function formatDate(days, hour, m, s){
    p.innerHTML = `Faltam ${days} dias ${hour} horas ${m} minutos ${s} segundos`
  }

  function getDate(str){
    const [date, hour] = str.split(" ")
    const [day, month, year] = date.split("/")
    const [h, m] = hour.split("H")
    
    //importante lembrar de subtrair o mês
    return new Date(year, month - 1, day, h, m)
  }
})()