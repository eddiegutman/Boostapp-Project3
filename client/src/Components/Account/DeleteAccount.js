import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../libs/authUtils';
import { deleteAccount } from '../../libs/usersUtils';
import { AuthContext } from '../../App';

function DeleteAccount() {
    const { authentication, setAuthentication } = useContext(AuthContext);
    const [confrim, setConfirm] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        if (confrim) {
            e.preventDefault();
            const id = authentication.user.id;
            const statusLogout = await logout();
            if (statusLogout.success) {
                navigate('/login');
                const statusDelete = await deleteAccount(id);
                alert(statusDelete);
                setAuthentication({ success: false, user: null })
            }
        } else {
            alert('You must agree!')
        }
    }

    return (
        <div>
            <div>Delete Account</div>
            <form onSubmit={handleSubmit}>
                <input type={'checkbox'} id='confirm' onChange={e => setConfirm(e.target.checked)} />
                <label htmlFor='confirm'>I agree and understand the consequences</label> <br />
                <input type={'submit'} value={'Delete'} /> &nbsp;
                <button onClick={() => navigate('/account')}>Cancel</button>
            </form>
        </div>
    )
}

export default DeleteAccount;