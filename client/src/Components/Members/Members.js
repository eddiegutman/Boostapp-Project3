import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { authenticate } from '../../libs/authUtils';
import { AuthContext } from '../../App';

function Members() {
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
        authClient()
    }, [])

    return (
        <div style={{ border: '2px solid black' }}>
            <h2>Members</h2>
            <div>
                <Link to={'all'}>All Members</Link> &nbsp;
                <Link to={'addMember'}>Add Member</Link> &nbsp;
                {path === '/members/all' ? <span>
                    <label htmlFor='search'>Find Member : </label>
                    <input id='search' type={'search'} onChange={(e) => setSearch(e.target.value)} />
                </span> : null}

            </div>
            <div>
                <Outlet context={[search, setSearch]} />
            </div>
        </div>
    )
}

export default Members;