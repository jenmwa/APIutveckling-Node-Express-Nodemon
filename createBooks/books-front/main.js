const bookArray = document.querySelector("#bookArray");

/******************************************************
 *********** RENDER BOOK STARTPAGE ********************
 ******************************************************/

let welcomeDiv = `
<h1>Welcome to the Online Library!</h1>
<h4>Our Books:</h4>
`;

let welcome = document.querySelector("#welcome");
welcome.innerHTML = welcomeDiv;

function fetchBookArray() {
  fetch("http://localhost:3001/books")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      renderBooks(data);
    });
    //insert errorMsg if list not loaded
}

function renderBooks(books) {
  console.log(books);

  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    const availableText = book.available ? "Yes" : "No";

    bookArray.innerHTML += `
      Title: ${book.name}<br>
      Author: ${book.author}<br>
      Available: ${availableText}<br>
      <a href="" data-id=${book.id} id="readMoreBtn${i}">Read More >>></a>
      <br><br>
      
      `;
    
    // const bookId = document.querySelector("#bookId");
    let readMoreBtn = document.querySelectorAll('#bookArray a');
    readMoreBtn.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Click ' + e.currentTarget.dataset.id);
        const bookId = e.target.dataset.id;
        fetchBook(bookId);
      })
    })
  }
}

fetchBookArray();


/******************************************************
 *********** RENDER MORE INFO BOOK:ID ******************
 ******************************************************/

function fetchBook(id) {
  fetch("http://localhost:3001/books/" + id)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

    })
      // handle error
    // });
}
