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
     // handle error if not loaded
    // });
}

function renderBooks(books) {
  console.log(books);

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
      // handle error if not loaded
    // });
}

function renderReadMore(dataId) {
  console.log('MER INFO')

  readMoreAboutBook.innerHTML = `
    <h4>MORE INFO ABOUT <em>${dataId.name}</em></h4><br>
    title: ${dataId.name}<br>
    author: ${dataId.author}<br>
    pages: ${dataId.pages}<br>
    available: ${getAvailableText(dataId)}<br>
    <button id="borrowBookBtn">Borrow this book >>></button>
  `
  borrowbtnState(dataId);
}

function borrowbtnState(dataId) {
  if (getAvailableText(dataId) === "No") {
    const borrowBookBtn = document.querySelector('#borrowBookBtn');
    borrowBookBtn.disabled = true;
    borrowBookBtn.innerHTML = "Not Available";
  }
  else {
    borrowBook();
  }
}

/******************************************************
 ****************** BORROW BOOK:ID ********************
 ******************************************************/

 //Klickevent BorrowBtn
 //Skicka till server, ändra status true till false

 function borrowBook(dataId) {
  const borrowBookBtn = document.querySelector('#borrowBookBtn');
  borrowBookBtn.addEventListener('click', () => {
    console.log('let send req to server!');
    console.log(dataId.id)
    fetch("http://localhost:3001/books/" + dataId, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({available: false})
    })
    .then(res => res.json())
      .then(data => {
        console.log(data);
        borrowBookBtn.disabled = true;
        borrowBookBtn.innerHTML = "Not Available";
      })
      // handle error if not loaded
    // });
  })
 }