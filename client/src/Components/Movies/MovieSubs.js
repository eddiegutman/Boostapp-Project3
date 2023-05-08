import React from 'react';

function MovieSubs(props) {
    const subs = props.subs;
    return (
        <div style={{ border: '2px solid black' }}>
            <h4>Subscribers</h4>
            <ul>
                {subs.map(sub => {
                    return (<li key={sub.member._id}>
                        {sub.member.fullname} &nbsp; {new Date(sub.date).toLocaleDateString('en-IL')}
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default MovieSubs;