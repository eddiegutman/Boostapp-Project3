import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../libs/authUtils';
import { AuthContext } from '../../App';

function NavBar() {
    const { authentication, setAuthentication } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        const status = await logout();
        if (status.success) {
            setAuthentication({ success: false, user: null })
            navigate('/login');
        }
    }

    return (
        <div>

            {authentication.success ? <span>
                <Link to='/movies/all'>Movies</Link> &nbsp;
                <Link to='/members/all'>Members</Link> &nbsp;
                <span>{authentication.user.fullname}</span> &nbsp;
                <Link to='/account'>Manage Account</Link> &nbsp;
                <button onClick={handleLogout}>Logout</button>
            </span>
                : <span>
                    <Link to='/noAccess'>Movies</Link> &nbsp;
                    <Link to='/noAccess'>Members</Link> &nbsp;
                    <Link to='/login'>Login</Link> &nbsp;
                    <Link to='/register'>Register</Link>
                </span>}
        </div>
    )
}

export default NavBar;