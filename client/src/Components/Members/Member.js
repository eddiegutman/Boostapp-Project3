import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MemberSubs from './MemberSubs';
import { deleteMember } from '../../libs/membersUtils';

function Member(props) {
    const member = props.entry.member;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        const { data } = await deleteMember(id);
        dispatch({ type: 'DELETE_MEMBER', payload: id });
        alert(data);
    }

    return (
        <div style={{ border: '2px solid black' }}>
            <h4>{member.fullname}</h4>
            <span>Email : {member.email}</span> <br />
            <span>City: {member.city}</span> <br />
            <button onClick={() => navigate(`/members/edit/${member._id}`)}>Edit</button>
            <button onClick={() => handleDelete(member._id)} >Delete</button> <br />
            <MemberSubs subs={props.entry.subscriptions} memberID={member._id} />
        </div>
    )
}

export default Member;