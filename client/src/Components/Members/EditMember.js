import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateMember, getMemberByID } from '../../libs/membersUtils';

function EditMember() {
    const { id } = useParams();
    const [member, setMember] = useState({_id: '', fullname: '', email: '', city: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await updateMember(id, member);
        dispatch({ type: 'UPDATE_MEMBER', payload: member });
        alert(data);
        navigate('/members/all');
    }

    const getData = async () => {
        const data = await getMemberByID(id)
        setMember({...data});
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h4>Edit member</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor='fullname'>Name : </label>
                <input type={'text'} id='fullname' onChange={e => setMember({ ...member, fullname: e.target.value })} value={member.fullname} required /> <br />
                <label htmlFor='email'>Email : </label>
                <input type={'email'} id='email' onChange={e => setMember({ ...member, email: e.target.value })} value={member.email} required /> <br />
                <label htmlFor='city'>Premiered : </label>
                <input type={'text'} id='city' onChange={e => setMember({ ...member, city: e.target.value })} value={member.city} /> <br />
                <input type={'submit'} value={'Update'} /> &nbsp;
                <button onClick={() => navigate('/members/all')}>Cancel</button>
            </form>
        </div>
    )
}

export default EditMember;