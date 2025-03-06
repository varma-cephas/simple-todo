const todoList = document.querySelector("#todo-list");
const todoInputForm = document.querySelector("#todo-input-form");
const inputTodo = document.querySelector("#input-todo");


todoInputForm.addEventListener("submit", event =>{
    event.preventDefault()

    const todoItem=document.createElement("li");
    const deleteButton=document.createElement("button");
    const todoNameWrapper=document.createElement("div");
    const deleteButtonWrapper=document.createElement("div");

    todoNameWrapper.textContent=inputTodo.value;
    deleteButton.textContent="Delete";

    deleteButton.classList.add("deleteButton");
    deleteButton.classList.add("border");


    deleteButtonWrapper.appendChild(deleteButton)
    deleteButtonWrapper.classList.add("delete")

    todoItem.appendChild(todoNameWrapper)
    todoItem.appendChild(deleteButtonWrapper)


    todoItem.classList.add("flex");
    todoItem.classList.add("gap-6")
    todoItem.classList.add("w-[fit-content]")


    todoList.appendChild(todoItem)

    inputTodo.value="";
 
})


todoList.addEventListener("click", event=>{
    if(event.target.classList.contains("deleteButton")) event.target.parentElement.parentElement.remove()
})

