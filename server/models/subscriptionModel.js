const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    movieID: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    memberID: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
    date: Date
});
const Subscription = mongoose.model('Subscription', SubscriptionSchema);
module.exports = Subscription;