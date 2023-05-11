import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Movie from './Movie';

function MovieSearch() {
    const { id } = useParams();
    const movies = useSelector(state => state.movies);
    const entry = movies.find(entry => entry.movie._id === id);

    return (
        <div>
            {entry ? <Movie entry={entry} /> : 'movie does not exist'}
        </div>
    )
}

export default MovieSearch;