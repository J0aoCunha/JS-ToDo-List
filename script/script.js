// seleçao de elementos
const form = document.getElementById('form');
const inputTodo = document.getElementById('todo-input');
const todoList = document.getElementsByClassName('todo-list')
const checkBtn = document.getElementById('checkBtn')
const deleteBtn = document.getElementById('deleteBtn')
// FunÇões
// Eventos
form.addEventListener('submit', (e) => {
    e.preventDefault();


    const inputValue = inputTodo.value;

    if (inputValue) {
        console.log(inputValue)
    }

})