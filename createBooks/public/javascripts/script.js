  //flytta detta till egen fil och sätt script i head med defer!
  fetch('/books')
  .then(response => response.json())
  .then(data => {
    const booksDiv = document.getElementById('books');
    data.forEach(book => {
      const bookElement = document.createElement('div');
      const titleElement = document.createElement('h3');
      const authorElement = document.createElement('h4');
      const availableElement = document.createElement('p');
      const readMoreBtn = document.createElement('button')

      titleElement.innerText = book.title;
      authorElement.innerText = `by ${book.author}`;
      availableElement.innerText = ` available: ${book.available}`;
      readMoreBtn.innerText = 'read more';

      bookElement.appendChild(titleElement);
      bookElement.appendChild(authorElement);
      bookElement.appendChild(availableElement);
      bookElement.appendChild(readMoreBtn);

      booksDiv.appendChild(bookElement);
    });
  });
