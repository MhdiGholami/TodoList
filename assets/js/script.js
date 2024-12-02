// Todolist Project
// ********************


// Dom Elements Selection
let checkboxInp = document.querySelectorAll('#checkbox-input')
let todoList = document.querySelector('.todo-list')
let checkboxInp1 = document.getElementById('checkbox-input1')
let checkboxInp2 = document.getElementById('checkbox-input2')
let checkboxInp3 = document.getElementById('checkbox-input3')
let todo1Checkbox = document.querySelectorAll('.todo1-checkbox')
let plusBtn = document.getElementById('plus-btn')
let retryBtn = document.getElementById('retry-btn')
let plusBtnImg = document.getElementById('plusBtn-img')
let addItemInp = document.querySelector('.addItem-input')
let selectOption = document.getElementById('selectOpt')
let completedPageDiv = document.getElementById('completedPage-div')
let saveId;
let i = 3


// Function for changing the check box mode to tick and normal mode
function checkboxChange(event) {
    let selectInp = event.target.nextElementSibling
    let targetElemId = event.target.nextElementSibling.id
    let nextElemId = selectInp.nextElementSibling.id
    let targetElem = document.getElementById(targetElemId) // => select checkbox by id
    let nextElem = document.getElementById(nextElemId) // => select next element of checkbox by id

    if (targetElem.value === 'show') {
        targetElem.style.display = 'none'
        nextElem.style.display = 'block'
        targetElem.value = 'hide'
    }
    else if (targetElem.value === 'hide') {
        targetElem.style.display = 'block'
        nextElem.style.display = 'none'
        targetElem.value = 'show'
    }
}

// Function for add new item
plusBtn.addEventListener('click', function () {
    let newLi = document.createElement("li")
    newLi.setAttribute('class', 'todo-item')
    newLi.innerHTML = `
        <div id="todo3Ls" class="todo1-ls">
          <div onclick="checkboxChange(event)" style="position: absolute; width: 100%; height: 100%;"></div>
          <input id="checkbox${i + 1}" class="todo1-checkbox" type="checkbox" value="show">
          <img id="tick${i + 1}" style="display: none;" class="todo-tick" src="assets/img/tick_icon.svg" alt="">
          <span id="todo-text${i + 1}" class="todo1-title">${addItemInp.value}</span>
        </div>
        <div class="todo1-rs">
          <div id="edit-icon" onclick="editItem(event)">
            <img style="margin-right: 15px;" class="todo1-icon" src="assets/img/edit_icon.svg" alt="">
          </div>
          <div onclick="deleteItem(event)">
            <img class="todo1-icon" src="assets/img/delete_icon.svg" alt="">
          </div>
        </div>
    `
    i += 1
    addItemInp.value = ''
    todoList.appendChild(newLi)
})

// Function when edit icon clicked
function editItem(event) {
    plusBtn.style.display = 'none'
    retryBtn.style.display = 'block'
    let targetElem = event.target
    addItemInp.value = targetElem.parentElement.parentElement.previousElementSibling.lastElementChild.innerText
    saveId = targetElem.parentElement.parentElement.previousElementSibling.lastElementChild.id
}

// Function for edit item
retryBtn.addEventListener('click', function (event) {
    let targetSpan = document.getElementById(saveId)
    plusBtn.style.display = 'block'
    retryBtn.style.display = 'none'
    targetSpan.innerText = addItemInp.value
    addItemInp.value = ''
})

// Function for delete item
function deleteItem(event) {
    let targetElem = event.target
    targetElem.parentElement.parentElement.parentElement.remove()
}

// Function for filter selection 
selectOption.addEventListener('change', function () {
    if (selectOption.value === 'Completed') {
        completedPageDiv.style.display = 'block'
        todoList.style.display = 'none'

        for (var i = 0; i < todo1Checkbox.length; i++) {
            if (todo1Checkbox[i].value === 'hide') {
                let inpTarget = document.getElementById(todo1Checkbox[i].id)
                completedContentElems = inpTarget.parentElement.parentElement
                completedPageDiv.appendChild(completedContentElems)
                inpTarget.parentElement.nextElementSibling.children[0].style.display = 'none'
                inpTarget.previousElementSibling.style.display = 'none'
            }
        }
    } else if (selectOption.value === 'All') {
        completedPageDiv.style.display = 'none'
        todoList.style.display = 'block'
    }
})


