import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUserData } from '../../libs/usersUtils';
import { AuthContext } from '../../App';

function EditAccount() {
    const { authentication, setAuthentication } = useContext(AuthContext);
    const [user, setUser] = useState({ fullname: authentication.user?.fullname, email: authentication.user?.email });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = authentication.user.id;
        const status = await updateUserData(id, user);
        setAuthentication({ ...authentication, user: { id: id, fullname: user.fullname, email: user.email, } })
        alert(status);
        navigate('/account');
    }

    return (
        <div>
            <div>Edit info</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='fullname'>Fullname : </label> <br />
                <input type={'text'} id='fullname' onChange={e => setUser({ ...user, fullname: e.target.value })} value={user.fullname} required /> <br />
                <label htmlFor='email'>Email : </label> <br />
                <input type={'email'} id='email' onChange={e => setUser({ ...user, email: e.target.value })} value={user.email} required /> <br />
                <input type={'submit'} value={'Update'} /> &nbsp;
                <button onClick={() => navigate('/account')}>Cancel</button>
            </form>
        </div>
    )
}

export default EditAccount;