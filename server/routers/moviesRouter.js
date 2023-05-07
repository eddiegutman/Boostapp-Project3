const express = require('express');
const moviesBLL = require('../BLL/moviesBLL');

const router = express.Router();

// GET - get all movies
router.get("/", async (request, response) => {
    try {
        const movies = await moviesBLL.getAllMovies();
        response.status(200).json(movies);
    } catch (error) {
        return response.status(500).json(error);
    }
});

// GET - get all movies with their subscribers
router.get("/subs", async (request, response) => {
    try {
        const movies = await moviesBLL.getAllMoviesWithSubs();
        response.status(200).json(movies);
    } catch (error) {
        return response.status(500).json(error);
    }
});

// GET - get movie by id
router.get("/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const movie = await moviesBLL.getMovieByID(id);
        response.status(200).json(movie);
    } catch (error) {
        return response.status(500).json(error);
    }
});

// POST - add a new movie
router.post("/", async (request, response) => {
    try {
        const movie = request.body;
        const status = await moviesBLL.addMovie(movie);
        response.status(200).json(status);
    } catch (error) {
        return response.status(500).json(error);
    }
});

// PUT - update existing movie
router.put("/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const movie = request.body;
        const status = await moviesBLL.updateMovie(id, movie);
        response.status(200).json(status);
    } catch (error) {
        return response.status(500).json(error);
    }
});

// DELETE - delete a movie
router.delete("/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const status = await moviesBLL.deleteMovie(id);
        response.status(200).json(status);
    } catch (error) {
        return response.status(500).json(error);
    }
});

module.exports = router;