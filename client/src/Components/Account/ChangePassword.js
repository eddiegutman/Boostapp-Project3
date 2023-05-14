import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../libs/usersUtils';
import { AuthContext } from '../../App';

function ChangePassword() {
    const { authentication } = useContext(AuthContext);
    const [password, setPassword] = useState({ old: '', new: '' });
    const [confirm, setConfirm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.new === confirm) {
            const id = authentication.user.id;
            const status = await changePassword(id, password);
            alert(status);
            navigate('/account');
        } else {
            alert('Passwords do not match!')
        }
    }

    return (
        <div>
            <div>Change Password</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='oldPass'>Old Password : </label> <br />
                <input type={'password'} id='oldPass' onChange={e => setPassword({ ...password, old: e.target.value })} required /> <br />
                <label htmlFor='newPass'>New Password : </label> <br />
                <input type={'password'} id='newPass' onChange={e => setPassword({ ...password, new: e.target.value })} required minLength={6} maxLength={12} /> <br />
                <label htmlFor='confirmPass'>Confirm Password : </label> <br />
                <input type={'password'} id='confirmPass' onChange={e => setConfirm(e.target.value)} required minLength={6} maxLength={12} /> <br />
                <input type={'submit'} value={'Change'} /> &nbsp;
                <button onClick={() => navigate('/account')}>Cancel</button>
            </form>
        </div>
    )
}

export default ChangePassword;