const express = require('express');
const subscriptionsBLL = require('../BLL/subscriptionBLL');

const router = express.Router();

// GET - get all subscriptions
router.get("/", async (request, response) => {
    try {
        const subscriptions = await subscriptionsBLL.getAllSubscriptions();
        response.status(200).json(subscriptions);
    } catch (error) {
        return response.status(500).json(error);
    }
});

// GET - get subscription by id
router.get("/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const subscription = await subscriptionsBLL.getSubscriptionByID(id);
        response.status(200).json(subscription);
    } catch (error) {
        return response.status(500).json(error);
    }
});

// POST - add a new subscription
router.post("/", async (request, response) => {
    try {
        const subscription = request.body;
        const status = await subscriptionsBLL.addSubscription(subscription);
        response.status(200).json(status);
    } catch (error) {
        return response.status(500).json(error);
    }
});

module.exports = router;