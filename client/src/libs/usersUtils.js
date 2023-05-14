import axios from 'axios';

const url = 'http://localhost:8000/users'

// GET - get all members
const register = async (user) => {
    const { data } = await axios.post(`${url}/register`, user, { withCredentials: true });
    return data;
}

export {
    register
}