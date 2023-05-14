import React from 'react';
import { useEffect, useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { authenticate } from '../../libs/authUtils';
import { AuthContext } from '../../App';

function ManageAccount() {
    const { authentication, setAuthentication } = useContext(AuthContext);
    const navigate = useNavigate();

    const authClient = async () => {
        const status = await authenticate();
        if (status.authenticate) {
            setAuthentication({ success: true, user: status.userData })
        } else {
            navigate('/noAccess');
        }
    }

    useEffect(() => {
        authClient();
    }, [])

    return (
        <div>
            <h2>Manage account</h2>
            <span>Hello {authentication.user?.fullname}</span> <br />
            <Link to='editAccount' >Edit Details</Link> &nbsp;
            <Link to='changePassword' >Change Password</Link> &nbsp;
            <Link to='deleteAccount' >Delete Account</Link> <br />
            <Outlet />
        </div>
    )
}

export default ManageAccount;