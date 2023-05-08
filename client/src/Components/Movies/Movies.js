import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Movie from './Movie';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

function Movies() {
    const movies = useSelector(state => state.movies);

    const [search, setSearch] = useState('');

    return (
        <div style={{ border: '2px solid black' }}>
            <h2>Movies</h2>
            <div>
                <Link to={'all'}>All Movies</Link> &nbsp;
                <Link to={'addMovie'}>Add Movie</Link> &nbsp;
                <span>
                    <label htmlFor='search'>Find Movie : </label>
                    <input id='search' type={'text'} onChange={(e) => setSearch(e.target.value)} />
                </span>
            </div>
            <div>
                <Outlet context={[search, setSearch]}/>
            </div>
        </div>
    )
}

export default Movies;