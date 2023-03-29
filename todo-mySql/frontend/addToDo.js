import printTodos from "./printTodos.js";

const newTodoInput = document.querySelector("#newTodoInput");
const addToDoBtn = document.querySelector("#addToDoBtn");

export default addToDoBtn.addEventListener("click", () => {
  console.log("click", newTodoInput.value);

  fetch("http://localhost:3000/todos/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({newTodoName: newTodoInput.value, newTodoList: 1})
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      newTodoInput.value = '';
      printTodos();
      
    });
});
