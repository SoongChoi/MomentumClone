const TODO_LIST_KEY = "todos";

const todo_form = document.getElementById("todo");
const todo_list = document.getElementById("todo-list");

// Todo list master
let todo_master_list = [];

function handleDeleteButton(info) {
    clickedID = info.target.parentElement.id;
    
    // 삭제요청된 ID만 제외한 리스트로 업데이트
    todo_master_list = todo_master_list.filter(
        todos => todos.id !== parseInt(clickedID)
        );
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todo_master_list));
    
    // 화면 삭제
    todo_list.removeChild(info.target.parentElement);
}

function paintTodoList(todoObject) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    li.appendChild(span);
    li.id = todoObject.id;    // 삭제 요청시 ID 식별용
    span.innerText = todoObject.text;
    li.appendChild(button);
    button.innerText = "✂️";   // CUT imoticon
    button.addEventListener("click", handleDeleteButton);
    
    todo_list.appendChild(li);
}

function makeTodoObject(task_name) {
    const newTodoObj = {
        text: task_name,
        id : Date.now(),
    };
    return newTodoObj;
}

function handleTodoSubmit(formInfo) {
    const todo_input = document.querySelector("#todo input");

    formInfo.preventDefault();
    const new_todo = makeTodoObject(todo_input.value);
    todo_input.value = "";
    
    saveTodoList(new_todo);
    paintTodoList(new_todo);
}

function saveTodoList(task_name) {
    todo_master_list.push(task_name);
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todo_master_list));
}


//
// JS Starts HERE
todo_form.addEventListener("submit", handleTodoSubmit);

saved_todos = localStorage.getItem(TODO_LIST_KEY);
if(saved_todos !== null) {
    todo_master_list = JSON.parse(saved_todos);
    todo_master_list.forEach(paintTodoList);
}
