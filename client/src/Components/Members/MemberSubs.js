import React from 'react';

function MemberSubs(props) {
    const subs = props.subs;
    return (
        <div style={{ border: '2px solid black' }}>
            <h5>Subscriptions</h5>
            <ul>
                {subs.map(sub => {
                    return (<li key={sub.movie._id}>
                        {sub.movie.name} &nbsp; {new Date(sub.date).toLocaleDateString('en-IL')}
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default MemberSubs;