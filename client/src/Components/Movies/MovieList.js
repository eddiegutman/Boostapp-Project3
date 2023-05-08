import React from 'react';
import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';

import Movie from './Movie';

function MovieList(props) {
    const movies = useSelector(state => state.movies);
    const [search, setSearch] = useOutletContext()
    return (
        <div>
            <h3>Movie list</h3>
            {movies
                .filter(entry => entry.movie.name.toLowerCase().includes(search.toLowerCase()))
                .map(entry => {
                    return <Movie key={entry.movie._id} entry={entry} />
                })}
        </div>
    )
}

export default MovieList;