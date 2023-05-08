import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

function Movies() {
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