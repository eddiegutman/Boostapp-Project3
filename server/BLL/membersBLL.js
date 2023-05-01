const MovieModel = require('../models/movieModel');
const MemberModel = require('../models/memberModel');
const SubscriptionModel = require('../models/subscriptionModel');

// GET - get all members
const getAllMembers = async () => {
    const members = await MemberModel.find({});
    return members;
}

// GET - get member by ID
const getMemberByID = async (id) => {
    const member = await MemberModel.findById(id);
    return member;
}

// GET - get all members with their subscriptions
const getAllMembersWithSubs = async () => {
    // get all members
    const members = await MemberModel.find({});
    const data = [];
    for (let member of members) {
        // for each member find all of their subscription
        const movies = [];
        const subscriptions = await SubscriptionModel.find({ memberID: member._id });
        for (let sub of subscriptions) {
            const movie = await MovieModel.findById(sub.movieID);
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
    const member = new MembereModel(obj);
    member.save();
    return 'Member added successfully';
}

// PUT - update existing member
const updateMember = async (id, obj) => {
    await MemberModel.findByIdAndUpdate(id, obj);
    return 'Member updated successfully';
}

// DELETE - delete a member
const deleteMember = async (id) => {
    await MemberModel.findByIdAndDelete(id);
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