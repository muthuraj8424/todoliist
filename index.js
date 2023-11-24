let button = document.getElementById("add");
let todolist = document.getElementById("todolist");
let input = document.getElementById("input");

let todos = [];
button.addEventListener("click", () => {
  todos.push(input.value);
  addlist(input.value);
  console.log(todos);
  input.value = "";
});
function addlist(todo) {
  let para = document.createElement("li");
  para.textContent = todo;
  todolist.appendChild(para);
  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
    // removelist(todo);
  });
  para.addEventListener("dblclick", () => {
    todolist.removeChild(para);
    removelist(todo);
  });
}
function removelist(todo) {
  let index = todos.indexOf(todo);
  if (index > -1) {
    todos.splice(index, 1);
  }
}
