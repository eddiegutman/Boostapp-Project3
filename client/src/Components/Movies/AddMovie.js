import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ObjectID from 'bson-objectid';
import { addMovie } from '../../libs/movieUtils';

function AddMovie() {
    const [allGenres, setAllGenres] = useState(['Action', 'Adult', 'Adventure', 'Anime',
        'Children', 'Comedy', 'Crime', 'DIY', 'Drama', 'Espionage', 'Family', 'Fantasy',
        'Food', 'History', 'Horror', 'Legal', 'Medical', 'Music', 'Mystery', 'Nature',
        'Romance', 'Science-Fiction', 'Sports', 'Supernatural', 'Thriller', 'Travel',
        'War', 'Western'])

    const [movie, setMovie] = useState({ name: '', premiered: '', image: { medium: '' } });
    const [genres, setGenres] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleGenre = (e) => {
        if (e.target.checked) {
            setGenres([...genres, e.target.value])
        } else {
            setGenres([...genres.filter(genre => genre !== e.target.value)])
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMovie = {
            _id: ObjectID(),
            name: movie.name,
            premiered: movie.premiered,
            genres: genres,
            image: { medium: movie.image.medium }
        }
        const status = await addMovie(newMovie);
        dispatch({ type: 'ADD_MOVIE', payload: newMovie });
        alert(status.data);
        navigate('/movies/all');
    }

    return (
        <div>
            <h4>Add a movie</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name : </label>
                <input type={'text'} id='name' onChange={e => setMovie({ ...movie, name: e.target.value })} required /> <br />
                <label>Genres : </label> <br />
                {allGenres.map(genre => {
                    return <span key={genre}>
                        <input type={'checkbox'} id={`genre${genre}`} value={genre} onChange={e => toggleGenre(e)} />
                        <label htmlFor={`genre${genre}`}>{genre}</label>
                    </span>
                })}
                <br />
                <label htmlFor='image'>Image url : </label>
                <input type={'text'} id='image' onChange={e => setMovie({ ...movie, image: { medium: e.target.value } })} /> <br />
                <label htmlFor='date'>Premiered : </label>
                <input type={'date'} id='date' onChange={e => setMovie({ ...movie, premiered: e.target.value })} required /> <br />
                <input type={'submit'} value={'Add'} /> &nbsp;
                <button onClick={() => navigate('/movies/all')}>Cancel</button>
            </form>
        </div>
    )
}

export default AddMovie;