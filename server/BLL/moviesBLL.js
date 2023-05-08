const Movie = require('../models/movieModel');
const Member = require('../models/memberModel');
const Subscription = require('../models/subscriptionModel');

// GET - get all movies
const getAllMovies = async () => {
    const movies = await Movie.find({});
    return movies;
}

// GET - get movie by ID
const getMovieByID = async (id) => {
    const movie = await Movie.findById(id);
    return movie;
}

// GET - get all movies with their subscribers
const getAllMoviesWithSubs = async () => {
    // get all movies
    const movies = await Movie.find({});
    const data = [];
    for (let movie of movies) {
        // for each movie find all of its subscribers
        const subscribers = [];
        const subscriptions = await Subscription.find({ movieID: movie._id });
        for (let sub of subscriptions) {
            const member = await Member.findById(sub.memberID);
            subscribers.push({
                member: member,
                date: sub.date
            });
        }
        data.push({
            movie: movie,
            subscribers: subscribers
        });
    }
    return data;
}

// POST - add a new movie
const addMovie = async (obj) => {
    const movie = new Movie(obj);
    movie.save();
    return 'Movie added successfully';
}

// PUT - update existing movie
const updateMovie = async (id, obj) => {
    await Movie.findByIdAndUpdate(id, obj);
    return 'Movie updated successfully';
}

// DELETE - delete a movie
const deleteMovie = async (id) => {
    await Movie.findByIdAndDelete(id);
    return 'Movie deleted successfully';
}

module.exports = {
    getAllMovies,
    getMovieByID,
    getAllMoviesWithSubs,
    addMovie,
    updateMovie,
    deleteMovie
}