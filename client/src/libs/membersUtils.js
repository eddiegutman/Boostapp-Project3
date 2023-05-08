import axios from 'axios';

const url = 'http://localhost:8000/members'

// GET - get all members
const getAllMembers = async () => {
    const { data } = await axios.get(url);
    return data;
}

// GET - get all members with their subscriptions
const getAllMembersWithSubs = async () => {
    const { data } = await axios.get(`${url}/subs`);
    return data;
}

// GET - get member by id
const getMemberByID = async (id) => {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
}

// POST - add a new member
const addMember = async (member) => {
    const status = await axios.post(url, member);
    return status;
}

// PUT - update an existing member
const updateMember = async (id, member) => {
    const status = await axios.put(`${url}/${id}`, member);
    return status;
}

// DELETE - delete an existing member
const deleteMember = async (id) => {
    const status = await axios.delete(`${url}/${id}`);
    return status;
}

export {
    getAllMembers,
    getAllMembersWithSubs,
    getMemberByID,
    addMember,
    updateMember,
    deleteMember
}