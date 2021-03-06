const mongoose = require('mongoose');
// const marked = require('marked');
// const slugify = require('slugify');


// creating Schema models
const WritingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});


module.exports = mongoose.model('Writing', WritingSchema);