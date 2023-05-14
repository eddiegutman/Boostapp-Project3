import axios from 'axios';

const url = 'http://localhost:8000/users'

// register
const register = async (user) => {
    const { data } = await axios.post(`${url}/register`, user, { withCredentials: true });
    return data;
}

// update user's data
const updateUserData = async (id, userData) => {
    const { data } = await axios.put(`${url}/${id}`, userData, { withCredentials: true });
    return data;
}

// change user's password
const changePassword = async (id, user) => {
    const { data } = await axios.post(`${url}/changePassword/${id}`, user, { withCredentials: true });
    return data;
}

// delete account
const deleteAccount = async (id) => {
    const { data } = await axios.delete(`${url}/${id}`, { withCredentials: true });
    return data;
}

export {
    register,
    updateUserData,
    changePassword,
    deleteAccount
}