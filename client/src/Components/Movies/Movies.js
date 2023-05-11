import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Movies() {
    const location = useLocation();
    const path = location.pathname;
    const [search, setSearch] = useState('');

    return (
        <div style={{ border: '2px solid black' }}>
            <h2>Movies</h2>
            <div>
                <Link to={'all'}>All Movies</Link> &nbsp;
                <Link to={'addMovie'}>Add Movie</Link> &nbsp;
                {path === '/movies/all' ? <span>
                    <label htmlFor='search'>Find Movie : </label>
                    <input id='search' type={'search'} onChange={(e) => setSearch(e.target.value)} />
                </span> : null}

            </div>
            <div>
                <Outlet context={[search, setSearch]} />
            </div>
        </div>
    )
}

export default Movies;