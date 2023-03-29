import todoDone from "./todoDone.js";
import { listDrop } from "./printLists.js";

let app = document.querySelector('#app');

listDrop.addEventListener('change', (e) => {
  console.log('ändra lista', e.target.value);
  printTodos(e.target.value);
})

export default function printTodos(list) {

  if(!list) {
    list = 1;
  }

  fetch("http://localhost:3000/todos/"+ list )
    .then((res) => res.json())
    .then((data) => {
      console.log("todos", data);

      const ul = document.createElement('ul');

      data.map(todo => {
        const li = document.createElement('li');
        li.innerText = todo.todoName + " (" + todo.listId + ")";
        li.id = todo.todoId;

        li.addEventListener('click', () => {
          todoDone(li.id, listDrop.value);
        })

        ul.appendChild(li);
      })
      app.innerHTML = '';
      app.appendChild(ul)
    });
}
