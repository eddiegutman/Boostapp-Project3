import axios from 'axios';

const url = 'http://localhost:8000/movies'

// GET - get all movies
const getAllMovies = async () => {
    const { data } = await axios.get(url);
    return data;
}

// GET - get all movies with their subscribers
const getAllMoviesWithSubs = async () => {
    const { data } = await axios.get(`${url}/subs`);
    return data;
}

// GET - get movie by id
const getMovieByID = async (id) => {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
}

// POST - add a new movie
const addMovie = async (movie) => {
    const status = await axios.post(url, movie);
    return status;
}

// PUT - update an existing movie
const updateMovie = async (id, movie) => {
    const status = await axios.put(`${url}/${id}`, movie);
    return status;
}

// DELETE - delete an existing movie
const deleteMovie = async (id) => {
    const status = await axios.delete(`${url}/${id}`);
    return status;
}

export {
    getAllMovies,
    getAllMoviesWithSubs,
    getMovieByID,
    addMovie,
    updateMovie,
    deleteMovie
}