import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getMovieByID, updateMovie } from '../../libs/movieUtils';

function EditMovie() {
    const [allGenres, setAllGenres] = useState(['Action', 'Adult', 'Adventure', 'Anime',
        'Children', 'Comedy', 'Crime', 'DIY', 'Drama', 'Espionage', 'Family', 'Fantasy',
        'Food', 'History', 'Horror', 'Legal', 'Medical', 'Music', 'Mystery', 'Nature',
        'Romance', 'Science-Fiction', 'Sports', 'Supernatural', 'Thriller', 'Travel',
        'War', 'Western'])

    const { id } = useParams();
    const [movie, setMovie] = useState({ _id: '', name: '', premiered: '', image: { medium: '' } });
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
        const updatedMovie = { ...movie, genres: genres }
        const { data } = await updateMovie(id, updatedMovie);
        dispatch({ type: 'UPDATE_MOVIE', payload: updatedMovie });
        alert(data);
        navigate('/movies/all');
    }

    const getData = async () => {
        const data = await getMovieByID(id);
        setMovie({ ...data });
        setGenres([...data.genres]);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h4>Edit movie</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name : </label>
                <input type={'text'} id='name' onChange={e => setMovie({ ...movie, name: e.target.value })} value={movie.name} required /> <br />
                <label>Genres : </label> <br />
                {allGenres.map(genre => {
                    return <span key={genre}>
                        <input type={'checkbox'} id={`genre${genre}`} value={genre} onChange={e => toggleGenre(e)} checked={genres.includes(genre)} />
                        <label htmlFor={`genre${genre}`}>{genre}</label>
                    </span>
                })}
                <br />
                <label htmlFor='image'>Image url : </label>
                <input type={'text'} id='image' onChange={e => setMovie({ ...movie, image: { medium: e.target.value } })} value={movie.image.medium} /> <br />
                <label htmlFor='date'>Premiered : </label>
                <input type={'date'} id='date' onChange={e => setMovie({ ...movie, premiered: e.target.value })} value={movie.premiered} required /> <br />
                <input type={'submit'} value={'Update'} /> &nbsp;
                <button onClick={() => navigate('/movies/all')}>Cancel</button>
            </form>
        </div>
    )
}

export default EditMovie;