import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authenticate } from '../../libs/authUtils';

function Home() {
    const navigate = useNavigate();

    const authClient = async () => {
        const status = await authenticate();
        if (status.authenticate) {
            navigate('/movies/all')
        }
    }

    useEffect(() => {
        authClient()
    }, [])

    return (
        <div>
            <h3>Welcome</h3>
            <span>Please <Link to='/login' >Login</Link> to begin</span>
        </div>
    )
}

export default Home;