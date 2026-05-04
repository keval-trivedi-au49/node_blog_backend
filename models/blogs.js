const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
});

exports.BlogSchema = mongoose.model('blogs', blogSchema);