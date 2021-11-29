const todoTextField = document.getElementById('todo');
const todoForm = document.getElementById('todoForm');
const todoList = document.getElementById('list');

function removeTodo(event) {
    const todoButton = event.target;
    const todoLi = todoButton.parentNode;
    todoLi.remove();
}

function addTodo(event) {
    event.preventDefault(); // ne pas envoyer de requête vers le serveur

    const textToAdd = todoTextField.value;
    todoTextField.value = "";
    
    if (textToAdd.length > 0) {
        const todoItem = document.createElement("li");
        const todoText = document.createTextNode(textToAdd + " ");
        todoItem.appendChild(todoText);
        
        const removeTodoBtn = document.createElement("button");
        const removeTodoText = document.createTextNode("Supprimer");
        removeTodoBtn.appendChild(removeTodoText);

        
        removeTodoBtn.addEventListener('click', removeTodo);


        todoItem.appendChild(removeTodoBtn);
        
        todoList.appendChild(todoItem);
    }
}

todoForm.addEventListener('submit', addTodo);
