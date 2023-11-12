;(function(){
    "use strict"

    const formSubmit = document.querySelector("#todo-add")
    const inputTitle = formSubmit.querySelector("#item-input")
    const ul = document.getElementById("todo-list")

    let arrTask = [
        {
            name: "Crie sua tarefa",
            createdAt: Date.now(),
            updatedAt: null,
            completed: false,
        }
    ]

    function Task(name, createdAt, updatedAt, completed){
        this.name = name
        this.createdAt = createdAt || Date.now()
        this.updatedAt = updatedAt || null
        this.completed = completed || false
    }


    function addNewTask(task){
        arrTask.push(new Task(task))
    }

    function generateLi(task){
        const li = document.createElement("li")
        li.className = "todo-item"

        const buttonCheck = document.createElement("button")
        buttonCheck.className = "button-check"
        buttonCheck.setAttribute("action", "buttonCheck")

        buttonCheck.innerHTML = `<i action="buttonCheck" class="fas fa-check ${!task.completed ? "displayNone" : ""}" ></i>`

        const ptask = document.createElement("p")
        ptask.className = "task-name"
        ptask.innerText = task.name

        const iedit = document.createElement("i")
        iedit.className = "fas fa-edit"
        iedit.setAttribute("action", "actionEdit")

        const itrash = document.createElement("i")
        itrash.className = "fas fa-trash-alt"
        itrash.setAttribute("action", "itrash")

        li.appendChild(buttonCheck)
        li.appendChild(ptask)
        li.appendChild(iedit)
        li.appendChild(itrash)

        /* container de edição */
        const editContainer = document.createElement("div")
        editContainer.className = "editContainer"

        const inputEdit = document.createElement("input")
        inputEdit.className = "editInput"
        inputEdit.setAttribute("type", "text")

        const editButton = document.createElement("button")
        editButton.className = "editButton"
        editButton.innerText = "Edit"
        editButton.setAttribute("action", "editButton")

        const cancelButton = document.createElement("button")
        cancelButton.className = "cancelButton"
        cancelButton.innerText = "Cancel"
        cancelButton.setAttribute("action", "cancelButton")

        editContainer.appendChild(inputEdit)
        editContainer.appendChild(editButton)
        editContainer.appendChild(cancelButton)

        li.appendChild(editContainer)

        return li
    }

    function renderTask(){
        ul.innerHTML = ""
        arrTask.map(task => {
            ul.appendChild(generateLi(task))
        })
    }

    function checkActions(e){
        const dataAction = e.target.getAttribute("action")
        const lis = ul.getElementsByTagName("li")
        
        
        if(!dataAction) return

        let currentLi = e.target
        while(currentLi.nodeName !== "LI"){
            currentLi = currentLi.parentElement
        }

        const indexLi = [...lis].indexOf(currentLi)

        const liActive = currentLi.querySelector(".editContainer")
        const inputNewTask = liActive.querySelector(".editInput")

        const actions = {
            actionEdit: function(){
                [...ul.querySelectorAll(".editContainer")].forEach(lis => {
                    lis.removeAttribute("style")
                })
                liActive.style.display = "flex"
                inputNewTask.value = arrTask[indexLi].name
            },
            cancelButton: function(){
                liActive.style.display = "none"
            },
            editButton: function(){
                arrTask[indexLi].name = inputNewTask.value
                renderTask()
            },
            buttonCheck: function(){
                console.log("buttonCheck")
                arrTask[indexLi].completed = !arrTask[indexLi].completed
                renderTask()
            },
            itrash: function(){
                console.log()
                arrTask.splice(indexLi, 1)
                renderTask()
            }
        }

        if(actions[dataAction]){
            actions[dataAction]()
        }
        
    }

    formSubmit.addEventListener("submit", function(evt){
        evt.preventDefault()
        
        if(!inputTitle.value){
            alert("preencha corretamente!")
            return  
        }
        addNewTask(inputTitle.value)
        renderTask()
        inputTitle.value = ""
        inputTitle.focus()
    })

    renderTask()

    ul.addEventListener("click", checkActions)

})()