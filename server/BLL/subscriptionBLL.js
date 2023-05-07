const Subscription = require('../models/subscriptionModel');

// GET - get all subscriptions
const getAllSubscriptions = async () => {
    const subs = await Subscription.find({});
    return subs;
}

// GET - get subscription by ID
const getSubscriptionByID = async (id) => {
    const sub = await Subscription.findById(id);
    return sub;
}

// POST - add a new subscription
const addSubscription = async (obj) => {
    const sub = new Subscription(obj);
    sub.save();
    return 'Subscription added successfully';
}

// DELETE - delete a subscription
const deleteSubscription = async (id) => {
    await Subscription.findByIdAndDelete(id);
    return 'Subscription deleted successfully';
}

module.exports = {
    getAllSubscriptions,
    getSubscriptionByID,
    addSubscription,
    deleteSubscription
}