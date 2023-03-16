const  mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    title: {
        type: String,  
    },
    date: {
        type: String,
        default: Date.now()
    },
    subHead: String,
    text: String,
    APIkey: {
        type: String,
        unique: true,
        required: true
    }
    
});

module.exports = mongoose.model('blogpost', BlogSchema);