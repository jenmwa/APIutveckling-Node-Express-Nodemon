const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    blogAuthor: String,
    blogposts: {
        type: [mongoose.Types.ObjectId],
        ref: 'blogpost'
    }
});

module.exports = mongoose.model('author', authorSchema);