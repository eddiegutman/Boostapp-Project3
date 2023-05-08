import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ObjectID from 'bson-objectid';
import { addMember } from '../../libs/membersUtils';

function AddMember() {
    const [member, setMember] = useState({_id: ObjectID().toHexString(), fullname: '', email: '', city: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const status = await addMember(member);
        dispatch({ type: 'ADD_MEMBER', payload: member });
        alert(status.data);
        navigate('/members/all');
    }

    return (
        <div>
            <h4>Add a member</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor='fullname'>Name : </label>
                <input type={'text'} id='fullname' onChange={e => setMember({ ...member, fullname: e.target.value })} required /> <br />
                <label htmlFor='email'>Email : </label>
                <input type={'email'} id='email' onChange={e => setMember({ ...member, email: e.target.value })} required /> <br />
                <label htmlFor='city'>City : </label>
                <input type={'text'} id='city' onChange={e => setMember({ ...member, city: e.target.value })} /> <br />
                <input type={'submit'} value={'Add'} /> &nbsp;
                <button onClick={() => navigate('/members/all')}>Cancel</button>
            </form>
        </div>
    )
}

export default AddMember;