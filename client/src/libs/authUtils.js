import axios from 'axios';

const url = 'http://localhost:8000';

// Login
const login = async (user) => {
    const { data } = await axios.post(`${url}/login`, user, { withCredentials: true });
    return data;
}

// Logout
const logout = async () => {
    const { data } = await axios.get(`${url}/logout`, { withCredentials: true });
    return data;
}

// Authenticate
const authenticate = async () => {
    const { data } = await axios.get(`${url}/checkAuthentication`, { withCredentials: true });
    return data;
}

export {
    login,
    logout,
    authenticate
}