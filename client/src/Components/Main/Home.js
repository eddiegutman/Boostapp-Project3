import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h3>Welcome</h3>
            <span>Please <Link to='/login' >Login</Link> to begin</span>
        </div>
    )
}

export default Home;