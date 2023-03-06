var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    let printForm = `<h2>add a book</h2>
    <p><em>How rare is it to find a book as beautiful as you</em> ☺️<br><br>
    Want to add a book to our library?<br>
    Please fill out the information below and add your book to the collection</p>
                    <form action="addbooks/addBook" method="post">add a book:<br>
                        <label> Title:
                            <input type="text" name="bookTitle">
                        </label>
                        <label> Author:
                            <input type="text" name="bookAuthor">
                        </label>
                        <label> pages:
                            <input type="number">
                        </label>
                        <button>Add</button>
                    </form>`;

    res.send(printForm)
});

router.post('/addBook', function(req, res) {
    res.send('Thank you for adding ' + req.body.bookTitle + ' by ' + req.body.bookAuthor + ' to our library.<br><br><a href="/"><button id="goToStartPage">BACK TO START</button></a>');
});

module.exports = router;