var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let books = [
        {id: 1, name: 'Don Quixote', author: 'Miguel de Cervantes', pages: 109, available: true},
        {id: 2, name: 'Lord of the Rings', author: 'J.R.R. Tolkien', pages: 1209, available: true},
        {id: 3, name: 'Harry Potter and the Sorcerer´s Stone', author: 'J.K. Rowling', pages: 324, available: false},
        {id: 4, name: 'And Then There Were None', author: 'Agatha Christie', pages: 258, available: true},
        {id: 5, name: 'Alice´s Adventures in Wonderland', author: ' Lewis Carroll', pages: 78, available: true},
        {id: 6, name: 'The Lion, the Witch, and the Wardrobe', author: 'C.S. Lewis', pages: 108,available: true},
        {id: 7, name: 'Pinocchio', author: ' Carlo Collodi', pages: 49, available: true},
        {id: 8, name: 'Catcher in the Rye', author: ' J.D. Salinger', pages: 116, available: false},
        {id: 9, name: 'Anne of Green Gables', author: 'L. M. Montgomery', pages: 382, available: true},
        {id: 10, name: 'Twenty Thousand Leagues Under the Sea', author: 'Jules Verne', pages: 259, available: false}
    
    ];
    res.json(books);
});

module.exports = router;
