var express = require("express");
var router = express.Router();


  let books = [
    {
      id: 1,
      name: "Don Quixote",
      author: "Miguel de Cervantes",
      pages: 109,
      available: true,
    },
    {
      id: 2,
      name: "Lord of the Rings",
      author: "J.R.R. Tolkien",
      pages: 1209,
      available: true,
    },
    {
      id: 3,
      name: "Harry Potter and the Sorcerer´s Stone",
      author: "J.K. Rowling",
      pages: 324,
      available: false,
    },
    {
      id: 4,
      name: "And Then There Were None",
      author: "Agatha Christie",
      pages: 258,
      available: true,
    },
    {
      id: 5,
      name: "Alice´s Adventures in Wonderland",
      author: "Lewis Carroll",
      pages: 78,
      available: true,
    },
    {
      id: 6,
      name: "The Lion, the Witch, and the Wardrobe",
      author: "C.S. Lewis",
      pages: 108,
      available: true,
    },
    {
      id: 7,
      name: "Pinocchio",
      author: " Carlo Collodi",
      pages: 49,
      available: true,
    },
    {
      id: 8,
      name: "Catcher in the Rye",
      author: " J.D. Salinger",
      pages: 116,
      available: false,
    },
    {
      id: 9,
      name: "Anne of Green Gables",
      author: "L. M. Montgomery",
      pages: 382,
      available: true,
    },
    {
      id: 10,
      name: "Twenty Thousand Leagues Under the Sea",
      author: "Jules Verne",
      pages: 259,
      available: true,
    },
  ];

router.get("/", function (req, res, next) {
  res.json(books);
});

router.get("/:id", function (req, res) {
  let id = Number(req.params.id);
  let bookId = books.find((book) => book.id === id);

  if (bookId) {
    res.json({
      name: bookId.name,
      author: bookId.author,
      pages: bookId.pages,
      available: bookId.available
    });
  } else {
    res.status(401).json("Book not found");
  }
});

router.put("/:id", function (req, res) {
  let id = Number(req.params.id);
  let bookId = books.find((book) => book.id === id);

  if (bookId) {
    // set the availability to false
    bookId.available = !bookId.available; 
    res.json({
      // message: "Book availability updated",
      // name: bookId.name,
      // author: bookId.author,
      // pages: bookId.pages,
      available: bookId.available
    });
  } else {
    res.status(401).json("Book not found");
  }
});

module.exports = router;
