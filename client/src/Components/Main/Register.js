import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../../libs/usersUtils';
import { authenticate } from '../../libs/authUtils';
import { AuthContext } from '../../App';

function Register() {
    const [user, setUser] = useState({ username: '', fullname: '', email: '', password: '' });
    const [confirm, setConfirm] = useState('');
    const { setAuthentication } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.password === confirm) {
            const regStatus = await register(user);
            alert(regStatus.message);
            if (regStatus.success) {
                const authStatus = await authenticate();
                if (authStatus.authenticate) {
                    setAuthentication({ success: true, user: authStatus.userData })
                    navigate('/movies/all');
                }
            }
        } else {
            alert('Passwords do not match!');
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username : </label>
                <input type={'text'} id='username' onChange={e => setUser({ ...user, username: e.target.value })} required /> <br />
                <label htmlFor='fullname'>Name : </label>
                <input type={'text'} id='fullname' onChange={e => setUser({ ...user, fullname: e.target.value })} required /> <br />
                <label htmlFor='email'>Email : </label>
                <input type={'email'} id='email' onChange={e => setUser({ ...user, email: e.target.value })} required /> <br />
                <label htmlFor='password'>Password : </label>
                <input type={'password'} id='password' onChange={e => setUser({ ...user, password: e.target.value })} required minLength={6} maxLength={12} /> <br />
                <label htmlFor='confirm'>Confirm Password : </label>
                <input type={'password'} id='confirm' onChange={e => setConfirm(e.target.value)} required minLength={6} maxLength={12} /> <br />
                <input type={'submit'} value={'Sign up'} /> <br />
                <span>Already have an account? <Link to='/login' >Sign in</Link></span>
            </form>
        </div>
    )
}

export default Register;