const  mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        // required: true  
    },
    date: {
        type: String,
        default: Date.now()
    },
    authors: [{
        type: mongoose.Types.ObjectId,
        ref: 'authors', //user
        // required: true
    }],
    subHead: { 
        type: String,
        required: true
    },
    text: {
        type: String,
    },
    Comment: String,
    APIkey: {
        type: String,
    //     unique: true,
    //     required: true
    }
    
});

module.exports = mongoose.model('blogpost', BlogSchema);