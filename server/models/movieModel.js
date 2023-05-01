const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: String,
    premiered: String,
    genres: [String],
    image: {
        medium: String
    }
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;