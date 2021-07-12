let mytodos = []
const inputEl = document.querySelector('.inputField input')
const add_btn = document.querySelector('#add_Btn')
const ulEl = document.querySelector('.todoList')
const delete_all = document.querySelector('#clearAll')
const peningTasks = document.querySelector('#peningTasks')
const todosfromLoalStorage = JSON.parse(localStorage.getItem('mytodos'))

if (todosfromLoalStorage) {
    mytodos = todosfromLoalStorage
    render()
}

add_btn.addEventListener('click', function () {
    if (inputEl.value) {
        mytodos.push(inputEl.value)
        inputEl.value = ''
        localStorage.setItem('mytodos', JSON.stringify(mytodos))

        inputEl.placeholder = 'Add your new todo'
        inputEl.classList.remove('placeholder')
        render()
    } else {
        inputEl.placeholder = 'please, add a todo !!'
        inputEl.classList.add('placeholder')
    }
})

delete_all.addEventListener('click', function () {
        localStorage.removeItem('mytodos')
        mytodos = []
        ulEl.innerHTML = `<p class="clear_all_warning"> No Todo Remaining, Enjoy 😎</p>`
        peningTasks.textContent = `${mytodos.length}`
})

function deleteTask(index) {
    mytodos.splice(index, 1)
    localStorage.setItem('mytodos', JSON.stringify(mytodos))
    if (mytodos.length === 0) {
        ulEl.innerHTML = `<p class="clear_all_warning"> No Todo Remaining, Enjoy 😎</p>`
        peningTasks.textContent = `${mytodos.length}`
    }
    else{
        render()
    }
}

function render(todos = mytodos) {
    let todoItems = ''
    if (mytodos.length === 0) {
        ulEl.innerHTML = `
        <p class="clear_all_warning"> No Todo Added</p>
        `
    } else {
        todos.forEach((todo, index) => {
            todoItems += `
            <li><p>${index + 1}. ${todo}</p><button onclick="deleteTask(${index})">
                <img src="./img/delete.png" alt="">
                </button>
            </li>`
        })
        ulEl.innerHTML = todoItems
        peningTasks.textContent = `${todos.length}`
    }
}