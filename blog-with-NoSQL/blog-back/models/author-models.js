const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    authors: {
        type: String,
        required: true
    },
    username: String,
    emailadress: String
    // blogposts: {
    //     type: [mongoose.Types.ObjectId],
    //     ref: 'blogpost'
    // }
});

module.exports = mongoose.model('authors', authorSchema);