import React from 'react';
import { Link } from 'react-router-dom';

function MovieSubs(props) {
    const subs = props.subs;
    return (
        <div style={{ border: '2px solid black' }}>
            <h4>Subscribers</h4>
            <ul>
                {subs.map(sub => {
                    return (<li key={sub.member._id}>
                        <Link to={`/members/${sub.member._id}`}>{sub.member.fullname}</Link> &nbsp;
                        {new Date(sub.date).toLocaleDateString('en-IL')}
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default MovieSubs;