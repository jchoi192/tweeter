const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const postSchema = new Schema ({
    content: String
}, {timestamps: true});

module.exports = mongoose.model('Post', postSchema)