import React from 'react';
import MovieSubs from './MovieSubs';

function Movie(props) {
    const movie = props.entry.movie;

    return (
        <div style={{ border: '2px solid black' }}>
            <img src={movie.image.medium} /> <br />
            <span>{movie.name}</span> <br />
            <span>{movie.premiered}</span> <br />
            <ul>
                {movie.genres.map((genre, index) => {
                    return (<li key={index}>{genre}</li>)
                })}
            </ul>
            <button>Edit</button>
            <button>Delete</button> <br />
            <MovieSubs subs={props.entry.subscribers} />
        </div>
    )
}

export default Movie;