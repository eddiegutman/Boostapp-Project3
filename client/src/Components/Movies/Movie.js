import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MovieSubs from './MovieSubs';
import { deleteMovie } from '../../libs/movieUtils';

function Movie(props) {
    const movie = props.entry.movie;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        const { data } = await deleteMovie(id);
        dispatch({ type: 'DELETE_MOVIE', payload: id });
        alert(data);
    }

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
            <button onClick={() => navigate(`/movies/edit/${movie._id}`)}>Edit</button>
            <button onClick={() => handleDelete(movie._id)} >Delete</button> <br />
            <MovieSubs subs={props.entry.subscribers} />
        </div>
    )
}

export default Movie;