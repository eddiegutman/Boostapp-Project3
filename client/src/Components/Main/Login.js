import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login, authenticate } from '../../libs/authUtils';
import { AuthContext } from '../../App';

function Login() {
    const [user, setUser] = useState({ username: '', password: '' });
    const { setAuthentication } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginStatus = await login(user);
        alert(loginStatus.message);
        if (loginStatus.success) {
            const authStatus = await authenticate();
            if (authStatus.authenticate) {
                setAuthentication({ success: true, user: authStatus.userData })
                navigate('/movies/all');
            }
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username : </label> <br />
                <input type={'text'} id='username' onChange={e => setUser({ ...user, username: e.target.value })} required /> <br />
                <label htmlFor='password'>Password : </label> <br />
                <input type={'password'} id='password' onChange={e => setUser({ ...user, password: e.target.value })} required /> <br />
                <input type={'submit'} value={'Login'} /> <br />
                <span>Don't have an accout? <Link to='/register' >Sign up</Link></span>
            </form>
        </div>
    )
}

export default Login;