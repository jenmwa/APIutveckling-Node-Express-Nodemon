import printTodos from "./printTodos.js";


export function todoDone(id) {
    console.log('spara todo som klar', id)

    fetch('http://localhost:3000/todos/done', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({todoId: id})
    })
        .then(res => res.json())
        .then(data => {
            console.log('sparad som klar',data);
            printTodos();
        })
    }