const SubscriptionModel = require('../models/subscriptionModel');

// GET - get all subscriptions
const getAllSubscriptions = async () => {
    const subs = await SubscriptionModel.find({});
    return subs;
}

// GET - get subscription by ID
const getSubscriptionByID = async (id) => {
    const sub = await SubscriptionModel.findById(id);
    return sub;
}

// POST - add a new subscription
const addSubscription = async (obj) => {
    const sub = new SubscriptionModel(obj);
    sub.save();
    return 'Subscription added successfully';
}

// DELETE - delete a subscription
const deleteSubscription = async (id) => {
    await SubscriptionModel.findByIdAndDelete(id);
    return 'Subscription deleted successfully';
}

module.exports = {
    getAllSubscriptions,
    getSubscriptionByID,
    addSubscription,
    deleteSubscription
}