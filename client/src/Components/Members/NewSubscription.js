import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ObjectID from 'bson-objectid';
import { addSubscription } from '../../libs/subscriptionsUtils';

function NewSubscription(props) {
    const id = props.memberID;
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);
    const [sub, setSub] = useState({ _id: ObjectID().toHexString(), movieID: '', memberID: id, date: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const status = await addSubscription(sub);
        dispatch({ type: 'ADD_SUB', payload: sub });
        alert(status.data);
        e.target.reset();
    }

    return (
        <div>
            <div>Add a new Subscription</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='movie'>Select a Movie : </label>
                <select defaultValue={''} id='movie' onChange={e => setSub({ ...sub, movieID: e.target.value })} required >
                    <option disabled></option>
                    {movies
                        .filter(entry => !entry.subscribers
                            .map(entry => entry.member._id)
                            .includes(id))
                        .map(entry => {
                            return (<option key={entry.movie._id} value={entry.movie._id}>
                                {entry.movie.name}
                            </option>)
                        })}
                </select> <br />
                <label htmlFor='date'>Date : </label>
                <input type='date' id='date' onChange={e => setSub({ ...sub, date: e.target.value })} required /> <br />
                <input type='submit' value={'Subscribe'} />
            </form>
        </div >
    )
}

export default NewSubscription;