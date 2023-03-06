const bookArray = document.querySelector("#bookArray");
const readMoreAboutBook = document.querySelector('#readMoreAboutBook')

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
      Available: ${getAvailableText(book)}<br>
      <button data-id=${book.id} id="readMoreBtn${i}">Read More >>></button>
      <br><br>
      
      `;
    
    btnsEventListeners();
  }
}

function getAvailableText(book) {
  return book.available ? "Yes" : "No";
}

fetchBookArray();

function btnsEventListeners() {
  let readMoreBtn = document.querySelectorAll('#bookArray button');
  readMoreBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Click ' + e.currentTarget.dataset.id);
      const bookId = e.target.dataset.id;
      fetchBook(bookId);
    });
  });
}

/******************************************************
 *********** RENDER MORE INFO BOOK:ID ******************
 ******************************************************/

function fetchBook(id) {
  fetch("http://localhost:3001/books/" + id)
    .then((res) => res.json())
    .then((dataId) => {
      console.log(dataId);
      renderReadMore(dataId);
    })
      // handle error
    // });
}

function renderReadMore(dataId) {
  console.log('MER INFO')

  readMoreAboutBook.innerHTML = `<h4>MORE INFO ABOUT ${dataId.name}</h4><br>
  title: ${dataId.name}<br>
  author: ${dataId.author}<br>
  pages: ${dataId.pages}<br>
  available: ${getAvailableText(dataId)}<br> `
}