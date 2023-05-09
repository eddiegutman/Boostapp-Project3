import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

function Members() {
    const [search, setSearch] = useState('');

    return (
        <div style={{ border: '2px solid black' }}>
            <h2>Members</h2>
            <div>
                <Link to={'all'}>All Members</Link> &nbsp;
                <Link to={'addMember'}>Add Member</Link> &nbsp;
                <span>
                    <label htmlFor='search'>Find Member : </label>
                    <input id='search' type={'text'} onChange={(e) => setSearch(e.target.value)} />
                </span>
            </div>
            <div>
                <Outlet context={[search, setSearch]}/>
            </div>
        </div>
    )
}

export default Members;