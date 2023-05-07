const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    city: String
});

const Member = mongoose.model('Member', MemberSchema);
module.exports = Member;