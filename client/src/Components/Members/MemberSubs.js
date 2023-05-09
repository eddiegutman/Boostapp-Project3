import React from 'react';
import { useState } from 'react';
import NewSubscription from './NewSubscription';

function MemberSubs(props) {
    const subs = props.subs;
    const [showNewSub, setNewSub] = useState(false);

    return (
        <div style={{ border: '2px solid black' }}>
            <h5>Subscriptions</h5>
            <button onClick={() => setNewSub(!showNewSub)}>{showNewSub ? 'Close' : 'New Subscription'}</button>
            {showNewSub ? <NewSubscription memberID={props.memberID} /> : null}
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