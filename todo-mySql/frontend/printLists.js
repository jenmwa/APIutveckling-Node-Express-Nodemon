let inputForm = document.querySelector('#inputForm')

export let listDrop = document.createElement("select");
listDrop.id = "listIdSelect";

export default function printLists() {
    fetch('http://localhost:3000/lists')
    .then(res => res.json())
    .then(data => {
        console.log('listor',data);
        data.map(list => {
            const dropItem = document.createElement('option');
            dropItem.value = list.listId;
            dropItem.innerText = list.listName;
            listDrop.appendChild(dropItem);
        })
        
        inputForm.prepend(listDrop);
    })
}