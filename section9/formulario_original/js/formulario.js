const formCadastro = document.querySelector(".formCadastro")
const inputTitle = document.querySelector("#txtTitulo")

formCadastro.addEventListener("submit", function(evt){
  evt.preventDefault()
  if(inputTitle.value === ""){
    showErrorMessage("preencha corretamente", function(){
      inputTitle.focus()
    })
  }else{
    alert("Tarefa adicionada corretamente!")
  }
})

const show = document.querySelector("#feedbackMessage")
const showParagrafo = document.querySelector("#feedbackMessage p")
const buttonShowError = document.querySelector("#feedbackMessage button")

function showErrorMessage(msg, cb){
  show.classList.add("show")
  showParagrafo.textContent = msg

  buttonShowError.addEventListener("click", hideShowError)
  buttonShowError.focus()
  buttonShowError.addEventListener("keyup", pressedEsc)

  function hideShowError(){
    show.classList.remove("show")
    /* removemos para evitar redundancia no nosso código */
    buttonShowError.removeEventListener("click", hideShowError)
    buttonShowError.removeEventListener("keyup", pressedEsc)

    if(typeof cb === "function"){
      cb()
    }
  }

  function pressedEsc(e){
    if(e.keyCode == 27){
      show.classList.remove("show")
      inputTitle.focus()
    }
  }
}

const inputAreaText = document.querySelector("#txtDescricao")
const countCaracter = document.querySelector("#contador")
const countCaracterspan = document.querySelector("#contador span")

inputAreaText.addEventListener("input", function(){
  if(inputAreaText.value !== ""){
    countCaracter.style.display = "block"
    countCaracterspan.textContent = inputAreaText.maxLength - inputAreaText.textLength
  }else{
    countCaracter.style.display = "none"
  }
})

const check = document.querySelector("#chkAceito")
const btnAdicionar = document.querySelector("#btn")

check.addEventListener("click", function(){
  if(check.checked){
    btnAdicionar.removeAttribute("disabled")
  }else{
    btnAdicionar.setAttribute("disabled","disabled")
  } 
})