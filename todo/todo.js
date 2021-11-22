const todoField = document.getElementById("todoField");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

function removeTodo(e) {
    const removeButton = e.target;
    const todoItem = removeButton.parentNode;
    todoItem.remove();
}

function addTodo() {
    const newItem = document.createElement("li");
    newItem.textContent = todoField.value + ' ';
    const newItemRemoveLink = document.createElement("a");
    newItemRemoveLink.href="#"
    newItemRemoveLink.textContent = "Supprimer";
    newItem.appendChild(newItemRemoveLink);
    newItemRemoveLink.addEventListener("click", removeTodo);
    todoField.value = "";
    todoList.appendChild(newItem);
}

addButton.addEventListener("click", addTodo);
