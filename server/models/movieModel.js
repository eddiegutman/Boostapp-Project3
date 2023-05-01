const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: String,
    premiered: String,
    genres: [String],
    image: {
        medium: String
    }
});

module.exports = mongoose.model('Movie', MovieSchema);