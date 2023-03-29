import printTodos from "./printTodos.js";
import { listDrop } from "./printLists.js";


const newTodoInput = document.querySelector("#newTodoInput");
const addToDoBtn = document.querySelector("#addToDoBtn");

export default addToDoBtn.addEventListener("click", () => {
  console.log("click", newTodoInput.value, listDrop.value);

  fetch("http://localhost:3000/todos/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({newTodoName: newTodoInput.value, newTodoList: listDrop.value})
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      newTodoInput.value = '';
      printTodos(listDrop.value);
      
    });
});
