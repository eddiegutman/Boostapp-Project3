import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Member from './Member';

function MemberSearch() {
    const { id } = useParams();
    const members = useSelector(state => state.members);
    const entry = members.find(entry => entry.member._id === id);

    return (
        <div>
            {entry ? <Member entry={entry} /> : 'member does not exist'}
        </div>
    )
}

export default MemberSearch;