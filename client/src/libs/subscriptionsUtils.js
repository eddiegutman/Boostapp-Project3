import axios from 'axios';

const url = 'http://localhost:8000/subscriptions'

// GET - get all subscriptions
const getAllSubscriptions = async () => {
    const { data } = await axios.get(url);
    return data;
}

// GET - get subscription by id
const getSubscriptionByID = async (id) => {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
}

// POST - add a new subscription
const addSubscription = async (sub) => {
    const status = await axios.post(url, sub);
    return status;
}

// DELETE - delete an existing subscription
const deleteSubscription = async (id) => {
    const status = await axios.delete(`${url}/${id}`);
    return status;
}

export {
    getAllSubscriptions,
    getSubscriptionByID,
    addSubscription,
    deleteSubscription
}