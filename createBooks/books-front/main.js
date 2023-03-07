const bookArray = document.querySelector("#bookArray");
const readMoreAboutBook = document.querySelector('#readMoreAboutBook');


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
     // handle error if not loaded
    // });
}

function renderBooks(books) {
  console.log(books);

  bookArray.innerHTML = '';

  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    bookArray.innerHTML += `
      Title: ${book.name}<br>
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

function btnsEventListeners() {
  let readMoreBtn = document.querySelectorAll('#bookArray button');
  readMoreBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('click ' + e.currentTarget.dataset.id);
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
      // handle error if not loaded
    // });
}

function renderReadMore(dataId) {
  console.log('MER INFO')

  readMoreAboutBook.innerHTML = `
    <h4>MORE INFO ABOUT <em>${dataId.name}</em></h4><br>
    id: ${dataId.id}<br>
    title: ${dataId.name}<br>
    author: ${dataId.author}<br>
    pages: ${dataId.pages}<br>
    available: ${getAvailableText(dataId)}<br>
    <button id="borrowReturnBtn">Borrow this book >>></button>

  `
  const borrowReturnBtn = document.querySelector('#borrowReturnBtn');
  if (getAvailableText(dataId) === "No") {
    borrowReturnBtn.innerText = "Return this book >>>";
    returnBook(dataId);
  } else {
    borrowReturnBtn.innerText = "Borrow this book >>>";
    borrowBook(dataId);
  }
}

/******************************************************
 ****************** BORROW BOOK:ID ********************
 ******************************************************/

 //Klickevent BorrowBtn
 //Skicka till server, ändra status true till false
 //uppdatera DOM

 function borrowBook(dataId) {
  const borrowReturnBtn = document.querySelector('#borrowReturnBtn');
  borrowReturnBtn.addEventListener('click', () => {
    console.log('let send to server!');
    const id = dataId.id;
    console.log(dataId)
    fetch(`http://localhost:3001/books/${id}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({available: false})
    })
    .then(res => res.json())
      .then(data => {
        console.log(data);
        renderReadMore(data);
        if (getAvailableText(data) === "No") {
          borrowReturnBtn.innerText = "Return this book >>>";
        } else {
          borrowReturnBtn.innerText = "Borrow this book >>>";
        }
        fetchBookArray();
        // location.reload();
      })
      //printa ut sidan på nytt!
      // handle error if not loaded
    // });
  })
 }

 /******************************************************
 **************** RETURN BORROWED BOOK *****************
 ******************************************************/

function returnBook(dataId) {
  const borrowReturnBtn = document.querySelector('#borrowReturnBtn');
  borrowReturnBtn.addEventListener('click', () => {
    console.log('click returnBtn');
    const id = dataId.id;
    console.log(id)
    fetch(`http://localhost:3001/books/${id}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({available: true})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      renderReadMore(data);
      if (getAvailableText(data) === "No") {
        borrowReturnBtn.innerText = "Return this book >>>";
      } else {
        borrowReturnBtn.innerText = "Borrow this book >>>";
      }
      // renderBooks(data); 
      // location.reload();
      fetchBookArray(); // fetch the updated book data

    })

    //printa ut sidan på nytt!
    // handle error if not loaded
  // });
  });
}

 /******************************************************
 ********************* ADD NEW BOOK ********************
 ******************************************************/

let addNewBookHtml = `
<button id="addNewBookBtn">ADD NEW BOOK</button>
<div id="addNewBookForm"></div>
`;

const addNewBookDiv = document.querySelector('#addNewBookDiv');
addNewBookDiv.innerHTML = addNewBookHtml;

const addNewBookBtn = document.querySelector('#addNewBookBtn');
addNewBookBtn.addEventListener('click', () => {
  console.log('add new book CLICK')
  addNewBookBtn.disabled = true;

  renderNewBookForm();
});


function renderNewBookForm() {
  const addNewBookForm = document.querySelector('#addNewBookForm');
  addNewBookForm.innerHTML = `
  <h2>add a book</h2>
     <p><em>How rare is it to find a book as beautiful as you</em> ☺️<br><br>
     Want to add a book to our library?<br>
     Please fill out the information below and add your book to the collection</p>
        <form>add a book:<br>
          <label> Title:
            <input type="text" name="bookTitle" id="newBookName" >
          </label>
          <label> Author:
            <input type="text" name="bookAuthor" id="newBookAuthor">
          </label>
          <label> pages:
            <input type="number" id="newBookPages">
          </label>
          <button id="addToLibraryBtn">ADD BOOK TO LIBRARY</button>
        </form>
    `;

  let newBookName = document.querySelector('#newBookName');
  let newBookAuthor = document.querySelector('#newBookAuthor');
  let newBookPages = document.querySelector('#newBookPages')
  let addToLibraryBtn = document.querySelector('#addToLibraryBtn');

  addToLibraryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clickkk');
    let addNewBook = {name: newBookName.value, author: newBookAuthor.value, pages: newBookPages.value, available: true}
    console.log(addNewBook)

    fetch('http://localhost:3001/books/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addNewBook)
      })
      .then(res => res.json())
      .then(data => 
        renderBooks(data)
      );
  });
};


fetchBookArray();
