const todoTextField = document.getElementById('todo');
const todoForm = document.getElementById('todoForm');
const todoList = document.getElementById('list');

function removeTodo(event) {
    const todoLink = event.target;
    const todoItem = todoLink.parentNode;
    todoItem.remove();
}

function addTodo(event) {
    event.preventDefault();

    const textToAdd = todoTextField.value;
    todoTextField.value = "";
    if (textToAdd.length > 0) {
        const todoItem = document.createElement("li");
        const todoText = document.createTextNode(textToAdd + " ");
        todoItem.appendChild(todoText);
        
        const removeTodoLink = document.createElement("a");
        removeTodoLink.href = "#";
        const removeTodoText = document.createTextNode("Supprimer");
        removeTodoLink.appendChild(removeTodoText);
        removeTodoLink.addEventListener('click', removeTodo);
        todoItem.appendChild(removeTodoLink);
        
        todoList.appendChild(todoItem);
    }
}

todoForm.addEventListener('submit', addTodo);
