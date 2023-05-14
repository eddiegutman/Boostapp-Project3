import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { authenticate } from '../../libs/authUtils';
import { AuthContext } from '../../App';

function Movies() {
    const { setAuthentication } = useContext(AuthContext);
    const location = useLocation();
    const path = location.pathname;
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const authClient = async () => {
        const status = await authenticate();
        if (status.authenticate) {
            setAuthentication({ success: true, user: status.userData })
        } else {
            navigate('/noAccess');
        }
    }

    useEffect(() => {
        authClient();
    }, [])

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