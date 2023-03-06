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
      dataId.id = id; 
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
    <button id="borrowBookBtn">Borrow this book >>></button>
    <button id="returnBookBtn" disabled>Return this book >>></button>
  `
  borrowbtnState(dataId);
}

function borrowbtnState(dataId) {
  const borrowBookBtn = document.querySelector('#borrowBookBtn');
  const returnBookBtn = document.querySelector('#returnBookBtn');

  if (getAvailableText(dataId) === "No") {
    borrowBookBtn.disabled = true;
    borrowBookBtn.innerHTML = "Not Available";
    returnBookBtn.disabled = false;
    returnBook(dataId);
  }
  else {
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
  const borrowBookBtn = document.querySelector('#borrowBookBtn');
  borrowBookBtn.addEventListener('click', () => {
    console.log('let send to server!');
    console.log(dataId)
    fetch(`http://localhost:3001/books/${dataId.id}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({available: false})
    })
    .then(res => res.json())
      .then(data => {
        console.log(data);
        borrowbtnState(dataId); 
        location.reload();
      })
      //printa ut sidan på nytt!
      // handle error if not loaded
    // });
  })
 }

 /******************************************************
 **************** RETURN BORROWED BOOK *****************
 ******************************************************/

 //returnBtn clickevent
// clickevent fetch server
// PUT available : true
// server svar
// updatera DOM

function returnBook(dataId) {
  const returnBookBtn = document.querySelector('#returnBookBtn');
  returnBookBtn.addEventListener('click', () => {
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
      borrowbtnState(dataId); 
      location.reload();
    })

    //printa ut sidan på nytt!
    // handle error if not loaded
  // });
  });
}
fetchBookArray();