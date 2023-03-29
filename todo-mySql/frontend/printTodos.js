import { todoDone } from "./todoDone.js";

let app = document.querySelector('#app')

export default function printTodos() {

  fetch("http://localhost:3000/todos")
    .then((res) => res.json())
    .then((data) => {
      console.log("todos", data);

      const ul = document.createElement('ul');

      data.map(todo => {
        const li = document.createElement('li');
        li.innerText = todo.todoName;
        li.id = todo.todoId;

        li.addEventListener('click', () => {
          todoDone(li.id);
        })

        ul.appendChild(li);
      })
      app.innerHTML = '';
      app.appendChild(ul)
    });
}
