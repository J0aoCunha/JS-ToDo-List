// seleçao de elementos
const form = document.getElementById('form');
const inputTodo = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list')
const checkBtn = document.getElementById('checkBtn')
const deleteBtn = document.getElementById('deleteBtn')
const noneTodoSection = document.querySelector('.none-todo');
// FunÇões

const saveToDo = (text) => {

    const todos = document.createElement('div');
    todos.classList.add("todo");

    const label = document.createElement('label');
    label.classList.add('custom-checkbox-label')
    todos.appendChild(label);

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.classList.add('checkBtn');
    label.appendChild(input);

    const span = document.createElement('span');
    span.classList.add('custom-checkbox');
    label.appendChild(span);

    const divContentTodo = document.createElement('div');
    divContentTodo.classList.add('content-todo');
    todos.appendChild(divContentTodo);

    const h3 = document.createElement('h3');
    divContentTodo.appendChild(h3);
    h3.textContent = text;

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('deleteBtn');
    btnDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14"
    viewBox="0 0 13 14" fill="none">
    <path d="M8.70214 4.98547H7.37158V10.5073H8.70214V4.98547Z" />
    <path d="M5.96239 4.98547H4.63184V10.5073H5.96239V4.98547Z" />
    <path
        d="M12.978 2.16712C12.9754 2.03061 12.9295 1.89846 12.8469 1.78975C12.7642 1.68104 12.6492 1.6014 12.5184 1.56232C12.4596 1.53782 12.3974 1.52252 12.3339 1.51696H8.78678C8.6525 1.07791 8.38082 0.693554 8.01174 0.420471C7.64265 0.147388 7.19564 0 6.73651 0C6.27738 0 5.83038 0.147388 5.46129 0.420471C5.0922 0.693554 4.82053 1.07791 4.68625 1.51696H1.13911C1.08068 1.51814 1.02269 1.52729 0.96674 1.54418H0.95162C0.813182 1.58701 0.693338 1.67547 0.61163 1.79515C0.529921 1.91483 0.49117 2.05866 0.501693 2.20319C0.512217 2.34771 0.571396 2.48441 0.669579 2.59099C0.767763 2.69757 0.899158 2.76774 1.04234 2.79006L1.75298 12.5334C1.76382 12.9127 1.91693 13.2741 2.18191 13.5458C2.44688 13.8175 2.80435 13.9797 3.18332 14H10.2867C10.6662 13.9804 11.0244 13.8186 11.29 13.5468C11.5556 13.2751 11.7092 12.9132 11.72 12.5334L12.4277 2.79914C12.5802 2.77797 12.72 2.70232 12.8212 2.58615C12.9223 2.46999 12.978 2.32116 12.978 2.16712ZM6.73651 1.21456C6.8661 1.21458 6.99427 1.24146 7.11294 1.29351C7.23161 1.34556 7.3382 1.42164 7.42598 1.51696H6.04704C6.13459 1.42135 6.24114 1.34507 6.35986 1.29299C6.47859 1.24092 6.60687 1.21421 6.73651 1.21456ZM10.2867 12.7904H3.18332C3.10168 12.7904 2.97467 12.6573 2.95955 12.4457L2.25798 2.81123H11.215L10.5135 12.4457C10.4984 12.6573 10.3714 12.7904 10.2867 12.7904Z" />
    </svg>`
    todos.appendChild(btnDelete);

    todoList.appendChild(todos);
    inputTodo.value = '';
    inputTodo.focus();


};

// Eventos
form.addEventListener('submit', (e) => {
    e.preventDefault();


    const inputValue = inputTodo.value;

    if (inputValue) {
        saveToDo(inputValue);

    }

    updateNoTasksSection()
})

document.addEventListener('click', (e) => {

    const targetEl = e.target;
    const parentEl = targetEl.closest("div");

    if (targetEl.classList.contains('checkBtn')) {
        parentEl.classList.toggle('checked-todo');
        parentEl.classList.toggle('todo');
    }

    if (targetEl.classList.contains('deleteBtn')) {
        parentEl.remove();
        updateNoTasksSection()
    }

})

function updateNoTasksSection() {
    const todoItems = document.querySelectorAll('.todo');

    if (noneTodoSection !== null) {
        if (todoItems.length === 0) {
            noneTodoSection.classList.remove('hidden');
            noneTodoSection.classList.add('none-todo');
        } else {
            noneTodoSection.classList.add('hidden');
            noneTodoSection.classList.remove('none-todo');
        }
    }
}