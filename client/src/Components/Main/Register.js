import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../../libs/usersUtils';

function Register() {
    const [user, setUser] = useState({ username: '', fullname: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const status = await register(user);
        alert(status.message);
        if (status.success) {
            navigate('/login');
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
                <input type={'submit'} value={'Sign up'} /> <br />
                <span>Already have an account? <Link to='/login' >Sign in</Link></span>
            </form>
        </div>
    )
}

export default Register;