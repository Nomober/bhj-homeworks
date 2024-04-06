const btn = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const form = document.getElementById('tasks__form');

function createTask(text){
    taskList.insertAdjacentHTML('beforeend', `<div class="task"><div class="task__title">${text}</div><a href="#" class="task__remove">&times;</a></div>`)
    let clearBtn = taskList.lastChild;
    taskList.lastChild.addEventListener('click', () => {
        clearBtn.closest(".task").remove()
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (taskInput.value.trim()){
        const taskText = taskInput.value
        createTask(taskText)
        form.reset()
    }
})