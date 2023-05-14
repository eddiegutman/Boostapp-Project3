import React from 'react';
import { Link } from 'react-router-dom';

function NoAccess() {
    return (
        <div>
            Please <Link to='/login'>login</Link> to view this page
        </div>
    )
}

export default NoAccess;