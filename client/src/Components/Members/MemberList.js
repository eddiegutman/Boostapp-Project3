import React from 'react';
import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';

import Member from './Member';

function MemberList() {
    const members = useSelector(state => state.members);
    const [search, setSearch] = useOutletContext();

    return (
        <div>
            <h3>Members list</h3>
            {members
                .filter(entry => entry.member.fullname.toLowerCase().includes(search.toLowerCase()))
                .map(entry => {
                    return <Member key={entry.member._id} entry={entry} />
                })}
        </div>
    )
}

export default MemberList;