const Movie = require('../models/movieModel');
const Member = require('../models/memberModel');
const Subscription = require('../models/subscriptionModel');

// GET - get all members
const getAllMembers = async () => {
    const members = await Member.find({});
    return members;
}

// GET - get member by ID
const getMemberByID = async (id) => {
    const member = await Member.findById(id);
    return member;
}

// GET - get all members with their subscriptions
const getAllMembersWithSubs = async () => {
    // get all members
    const members = await Member.find({});
    const data = [];
    for (let member of members) {
        // for each member find all of their subscription
        const movies = [];
        const subscriptions = await Subscription.find({ memberID: member._id });
        for (let sub of subscriptions) {
            const movie = await Movie.findById(sub.movieID);
            movies.push(movie);
        }
        data.push({
            member: member,
            subscriptions: movies
        });
    }
    return data;
}

// POST - add a new member
const addMember = async (obj) => {
    const member = new Member(obj);
    member.save();
    return 'Member added successfully';
}

// PUT - update existing member
const updateMember = async (id, obj) => {
    await Member.findByIdAndUpdate(id, obj);
    return 'Member updated successfully';
}

// DELETE - delete a member
const deleteMember = async (id) => {
    // delete the member
    await Member.findByIdAndDelete(id);
    // delete his subscriptions
    await Subscription.deleteMany({ memberID: id })
    return 'Member deleted successfully';
}

module.exports = {
    getAllMembers,
    getMemberByID,
    getAllMembersWithSubs,
    addMember,
    updateMember,
    deleteMember
}